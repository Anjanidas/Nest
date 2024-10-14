import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { sendEmailDto } from './mail.interface';
// import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class NotificationService {
  constructor(private readonly configService: ConfigService) {}
  mailTransport() {
    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<number>('MAIL_PORT'),
      secure: false,
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASSWORD'),
      },
    });
    return transporter;
  }

  async sendEmail(dto: sendEmailDto) {
    const { from, recipients, subject, text } = dto;
    const transport = this.mailTransport();
    const options = {
      from: from ?? {
        name: this.configService.get<string>('APP_NAME'),
        address: this.configService.get<string>('DEFAULT_MAIL_FROM'),
      },
      to: recipients,
      subject,
      text,
    };
    try {
      const result = await transport.sendMail(options);
      return result;
    } catch (error) {
      console.log('Error is ', error);
    }
  }
}
