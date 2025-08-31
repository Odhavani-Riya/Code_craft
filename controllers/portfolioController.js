import nodemailer from 'nodemailer';
import sendGridTransport from 'nodemailer-sendgrid-transport';

const transport = nodemailer.createTransport(
  sendGridTransport(
    {
      auth:{
        api_key: process.env.API_SENDGRID,
      }
    }
  )
)

export const senEmailController = (req, res) => {
    try {
      const {name,email,msg} = req.body

      //validation
      if(!name || !email || !msg){
        return res.status(500).send({
          success:false,
          message:"Please Provide All Fields",
        });
      }

      //email matter
      transport.sendMail({
        to:"riyaodhavani05@gmail.com",
        from:"riyaodhavani05@gmail.com",
        subject:'Regarding Mern Portfolio App',
        html: `
          <h5>Detail Information</h5>
          <ul>
            <li><p>Name: ${name}</p></li>
            <li><p>Email: ${email}</p></li>
            <li><p>Message: ${msg}</p></li>
          </ul>
        `
      })
      return res.status(200).send({
        success: true,
        message: "Your Message Sent Successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        success: false,
        message: "Send Email API Error",
        error,
      });
    }
  };
  