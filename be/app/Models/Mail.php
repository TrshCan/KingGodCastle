<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mail extends Model
{
    protected $table = 'mails';

    protected $fillable = [
        'title',
        'content',
        'sender_email',
        'receiver_email',
    ];

    public $timestamps = false;
    const CREATED_AT = 'received_at';
}

