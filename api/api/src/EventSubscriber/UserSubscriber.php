<?php
namespace App\EventSubscriber;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use ApiPlatform\Core\EventListener\EventPriorities;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;

final class UserSubscriber implements EventSubscriberInterface
{
    private $encoder;
    // private $jwtManager;
    public function __construct(UserPasswordEncoderInterface $encoder, JWTTokenManagerInterface $jwtManager)
    {
        $this->encoder = $encoder;
        // $this->jwtManager = $jwtManager;
    }
    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['cryptPwd', EventPriorities::PRE_WRITE], // POST_SERIALIZE ?
        ];
    }

    public function cryptPwd(ViewEvent $event): void
    {
        $user = $event->getControllerResult();

        // $token = $this->jwtManager->create($user);

        $method = $event->getRequest()->getMethod();
        if (!$user instanceof User || Request::METHOD_POST !== $method) {
            return;
        }
        $passwordEncoded = $this->encoder->encodePassword($user, $user->getPassword());
        $user->setPassword($passwordEncoded);

        $token = bin2hex(random_bytes(16));
        $user->setToken($token);
    }
}