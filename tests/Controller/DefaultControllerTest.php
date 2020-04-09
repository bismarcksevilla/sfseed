<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();
        
        $client->request('GET', '/');
        $crawler = $client->request('GET', '/');
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $this->assertSelectorTextContains('html span.version', 'ALFA');
    }

    // public function testLogin()
    // {
    //     $client = static::createClient();
    //     $crawler = $client->request('GET', '/login');

    //     // $form = $crawler->selectButton('submit')->form();

    //     // set some values
    //     $form['email']      = 'digital.nicaragua@gmail.com';
    //     $form['password']   = '2323';

    //     // submit the form
    //     $crawler = $client->submit($form);
    // }
}