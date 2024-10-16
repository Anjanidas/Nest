import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { sendMailDto } from './mail.interface';
import * as path from 'path';
import * as pug from 'pug';

@Injectable()
export class NotificationService {
  constructor(private readonly configService: ConfigService) {}
  mailTransport() {
    const transporter = nodemailer.createTransport({
      host: 'smtp.postmarkapp.com',
      port: 587,
      secure: false,
      auth: {
        user: 'c37b3e75-6088-4815-b363-094be78dea29',
        pass: 'c37b3e75-6088-4815-b363-094be78dea29',
      },
    });

    // transporter.use(
    //   'compile',
    //   nodemailerPug({
    //     templateDir: path.join(__dirname, '../templates'),
    //     pretty: true, // Optional: for pretty formatting
    //   }),
    // );
    return transporter;
  }

  private renderTemplate(templateName: string, context: any) {
    console.log(`Rendered template called`);
    console.log(`${__dirname}`);
    const templatePath = `/Users/anjanidas/Desktop/Nest Js/Nest/src/modules/notification/templates/first.pug`;
    console.log(`Path is ${templatePath} `);
    // Compile the Pug template
    const compiledFunction = pug.compileFile(templatePath);

    // Render the template with context
    return compiledFunction(context);
  }

  async sendEmail(dto: sendMailDto) {
    const { from, to, subject, text } = dto;
    const transport = this.mailTransport();
    const html = this.renderTemplate('first', { to });
    const mailOptions = {
      from,
      to,
      subject,
      text,
      html,
    };
    const result = await transport.sendMail(mailOptions);
    return result;
  }
}
