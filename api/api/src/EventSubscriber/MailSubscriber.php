<?php
namespace App\EventSubscriber;

use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\User;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;

final class MailSubscriber implements EventSubscriberInterface
{
    private $mailer;

    public function __construct(\Swift_Mailer $mailer)
    {
        $this->mailer = $mailer;
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['sendMail', EventPriorities::POST_WRITE],
        ];
    }

    public function sendMail(ViewEvent $event): void
    {
        $user = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if (!$user instanceof User || Request::METHOD_POST !== $method) {
            return;
        }

        $token = $user->getToken();


        $message = (new \Swift_Message('A new user has been added'))
            ->setFrom('projet.recrutecandidat@gmail.com')
            ->setTo($user->getEmail())
            ->setBody(
                '<html>' .
                ' <head></head>' .
                ' <body>' .
                ' Valider votre compte en cliquant sur le lien :' .
                ' </body>' .
                '</html>',
                'text/html' // Mark the content-type as HTML
            );

        $this->mailer->send($message);
    }
}