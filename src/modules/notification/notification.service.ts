import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class NotificationService {
  transporter: any;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.postmarkapp.com',
      port: 587,
      secure: false,
      auth: {
        user: 'c37b3e75-6088-4815-b363-094be78dea29',
        pass: 'c37b3e75-6088-4815-b363-094be78dea29',
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: 'anjani.das@forestlaketech.com',
      to,
      subject,
      text,
    };
    return this.transporter.sendMail(mailOptions);
  }
}
