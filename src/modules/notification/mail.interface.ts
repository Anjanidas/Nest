import { Address } from 'nodemailer/lib/mailer';

export type sendEmailDto = {
  from?: Address;
  recipients: Address[];
  subject: string;
  text: string;
};
