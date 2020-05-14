<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ManagerRegistry;

class UserController
{
    // private $entityManager;
    // public function __construct(EntityManagerInterface $entityManager)
    // {
    //     $this->entityManager = $entityManager;
    // }
    
    private $entityManager;
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function __invoke(Request $data)
    {
        $token = $data->get('token');
        var_dump($token);
    }
}