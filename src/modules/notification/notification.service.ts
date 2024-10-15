import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { sendMailDto } from './mail.interface';

@Injectable()
export class NotificationService {
  constructor(private readonly configService: ConfigService) {}
  mailTransport() {
    const HOST: string = this.configService.get<string>('MAIL_HOST');
    console.log(`Host - ${HOST}`);
    const transporter = nodemailer.createTransport({
      host: HOST,
      port: this.configService.get<number>('MAIL_PORT'),
      secure: false,
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASSWORD'),
      },
    });
    return transporter;
  }

  async sendEmail(dto: sendMailDto) {
    const transport = this.mailTransport();
    // const mailOptions = {
    //   from: 'anjani.das@forestlaketech.com',
    //   to,
    //   subject,
    //   text,
    // };
    const result = await transport.sendMail(dto);
    return result;
  }
}
