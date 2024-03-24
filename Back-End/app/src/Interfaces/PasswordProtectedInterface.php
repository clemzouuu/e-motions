<?php

namespace App\Interfaces;

interface PasswordProtectedInterface
{
    public function getHashedPassword(): string;

    public function passwordMatch(string $hash,string $plainPwd): bool;
}
