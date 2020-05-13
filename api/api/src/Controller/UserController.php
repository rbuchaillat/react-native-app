<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;

class UserController
{
    public function __invoke(Request $data)
    {
        return $data->get('token');
    }
}
