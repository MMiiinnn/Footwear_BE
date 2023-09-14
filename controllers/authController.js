const { User } = require("../models");
const { Sequelize } = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

const register = async (req, res) => {
  const { username, password, fullName, email, phone, address } = req.body;
  try {
    //tạo ra một chuỗi ngẫu nhiên
    const salt = bcrypt.genSaltSync(10);
    //mã hoá salt + password
    const hashPassword = bcrypt.hashSync(password, salt);
    const randomID = Math.floor(100000 + Math.random() * 999999);
    const user = await User.create({
      username,
      id_role: 1,
      password: hashPassword,
      activeID: randomID,
      fullName,
      email,
      phone,
      address,
      role: "Khách hàng",
    });
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "n19dccn107@student.ptithcm.edu.vn", // generated ethereal user
        pass: "dzwedtbaoqsmrkob", // generated ethereal password
      },
    });
    // send mail with defined transport object
    await transporter.sendMail({
      from: "n19dccn107@student.ptithcm.edu.vn", // sender address
      to: `${user.email}`, // list of receivers
      subject: "BOOKSTOREP2M", // Subject line
      text: "BO0KSTOREP2M", // plain text body
      html: `<!DOCTYPE html>
      <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
          <meta charset="utf-8"> <!-- utf-8 works for most cases -->
          <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
          <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
          <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
          <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
          <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <link href="http://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700" rel="stylesheet">
      
          <!-- CSS Reset : BEGIN -->
          <style>
      
              html,
      body {
          margin: 0 auto !important;
          padding: 0 !important;
          height: 100% !important;
          width: 100% !important;
          background: #f1f1f1;
      }
      
      * {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
      }
      
      div[style*="margin: 16px 0"] {
          margin: 0 !important;
      }
      
      table {
          border-spacing: 0 !important;
          border-collapse: collapse !important;
          table-layout: fixed !important;
          margin: 0 auto !important;
      }
      
      img {
          -ms-interpolation-mode:bicubic;
      }
      
      a {
          text-decoration: none;
      }
      
      *[x-apple-data-detectors],  /* iOS */
      .unstyle-auto-detected-links *,
      .aBn {
          border-bottom: 0 !important;
          cursor: default !important;
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
      }
      .a6S {
          display: none !important;
          opacity: 0.01 !important;
      }
      .im {
          color: inherit !important;
      }
      img.g-img + div {
          display: none !important;
      }
      @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
          u ~ div .email-container {
              min-width: 320px !important;
          }
      }
      @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
          u ~ div .email-container {
              min-width: 375px !important;
          }
      }
      @media only screen and (min-device-width: 414px) {
          u ~ div .email-container {
              min-width: 414px !important;
          }
      }
          </style>
          <style>
      .primary{
          background: #448ef6;
      }
      .bg_white{
          background: #ffffff;
      }
      .bg_light{
          background: #fafafa;
      }
      .bg_black{
          background: #000000;
      }
      .bg_dark{
          background: rgba(0,0,0,.8);
      }
      .email-section{
          padding:2.5em;
      }
      .btn{
          padding: 5px 15px;
          display: inline-block;
      }
      .btn.btn-primary{
          border-radius: 30px;
          background: #448ef6;
          color: #ffffff;
      }
      .btn.btn-white{
          border-radius: 30px;
          background: #ffffff;
          color: #000000;
      }
      .btn.btn-white-outline{
          border-radius: 30px;
          background: transparent;
          border: 1px solid #fff;
          color: #fff;
      }
      
      h1,h2,h3,h4,h5,h6{
          font-family: 'Work Sans', sans-serif;
          color: #000000;
          margin-top: 0;
          font-weight: 400;
      }
      
      body{
          font-family: 'Work Sans', sans-serif;
          font-weight: 400;
          font-size: 15px;
          line-height: 1.8;
          color: rgba(0,0,0,.4);
      }
      
      a{
          color: #448ef6;
      }
      
      .logo h1{
          margin: 0;
      }
      .logo h1 a{
          color: #000000;
          font-size: 20px;
          font-weight: 700;
          text-transform: uppercase;
          font-family: 'Poppins', sans-serif;
      }
      
      .navigation{
          padding: 0;
      }
      .navigation li{
          list-style: none;
          display: inline-block;;
          margin-left: 5px;
          font-size: 13px;
          font-weight: 500;
      }
      .navigation li a{
          color: rgba(0,0,0,.4);
      }
      .hero{
          position: relative;
          z-index: 0;
      }
      
      .hero .overlay{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          content: '';
          width: 100%;
          background: #000000;
          z-index: -1;
          opacity: .3;
      }
      
      .hero .text{
          color: rgba(255,255,255,.9);
      }
      .hero .text h2{
          color: #fff;
          font-size: 50px;
          margin-bottom: 0;
          font-weight: 300;
          line-height: 1;
      }
      .hero .text h2 span{
          font-weight: 600;
          color: #448ef6;
      }
      
      .heading-section h2{
          color: #000000;
          font-size: 28px;
          margin-top: 0;
          line-height: 1.4;
          font-weight: 400;
      }
      .heading-section .subheading{
          margin-bottom: 20px !important;
          display: inline-block;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(0,0,0,.4);
          position: relative;
      }
      .heading-section .subheading::after{
          position: absolute;
          left: 0;
          right: 0;
          bottom: -10px;
          content: '';
          width: 100%;
          height: 2px;
          background: #448ef6;
          margin: 0 auto;
      }
      
      .heading-section-white{
          color: rgba(255,255,255,.8);
      }
      .heading-section-white h2{
          color: #ffffff;
      }
      .heading-section-white .subheading{
          margin-bottom: 0;
          display: inline-block;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255,255,255,.4);
      }
      .text-services .meta{
          text-transform: uppercase;
          font-size: 14px;
          margin-bottom: 0;
      }
      .footer{
          color: rgba(255,255,255,.5);
      
      }
      .footer .heading{
          color: #ffffff;
          font-size: 20px;
      }
      .footer ul{
          margin: 0;
          padding: 0;
      }
      .footer ul li{
          list-style: none;
          margin-bottom: 10px;
      }
      .footer ul li a{
          color: rgba(255,255,255,1);
      }
      @media screen and (max-width: 500px) {
      }
          </style>
      </head>
      
      <body width="100%" style="margin: 0; padding: 0 !important; background-color: #222222;">
          <center style="width: 100%; background-color: #f1f1f1;">
          <div style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
            &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
          </div>
          <div style="max-width: 600px; margin: 0 auto;" class="email-container">
              <!-- BEGIN BODY -->
            <table align="center" role="presentation" cellspacing="0" cellpadding="0" width="100%" style="margin: auto;">
                <tr>
                <td valign="top" class="bg_white" style="padding: 1em 2.5em;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                    </table>
                </td>
                </tr><!-- end tr -->
                <tr>
                <td valign="middle" class="hero bg_white" style="background-image: url(http://res.cloudinary.com/dpgjnngzt/image/upload/v1693155759/cc8qb9rmjoxgsl2wx7fe_r9nmrg.webp); background-size: cover; height: 400px;">
                    <div class="overlay"></div>
                  <table>
                      <tr>
                          <td>
                              <div class="text" style="padding: 0 4em; text-align: center;">
                                  <h2>BookstoreP2M Security</h2>
                                  <p style="font-size: 20px;">Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.</p>
                              </div>
                          </td>
                      </tr>
                  </table>
                </td>
                </tr><!-- end tr -->
                <tr>
                  <td class="bg_white email-section">
                      <div class="heading-section" style="text-align: center; padding: 0 30px;">
                        <h2>URL active<br>http://localhost:3000/active?id_user=${user.id_user}&activeID=${user.activeID}</h2>
                        <p style="font-size: 20px;">Thank you for using our service.</p>
                      </div>
                </td>
              </tr><!-- end: tr -->
            <!-- 1 Column Text + Button : END -->
            </table>
            <table align="center" role="presentation" cellspacing="0" cellpadding="0" width="100%" style="margin: auto;">
                <tr>
                <td valign="middle" class="bg_black footer email-section">
                  <table>
                      <tr>
                      <td valign="top" width="33.333%" style="padding-top: 20px;">
                        <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td style="text-align: left; padding-left: 5px; padding-right: 5px;">
                                <h3 class="heading">Contact Info</h3>
                                <ul>
                                  <li><span class="text">Address: 123 Nguyen Van A Street,
                                  Ward 4, District 3,
                                  Ho Chi Minh City,
                                  Vietnam</span></li>
                                  <li><span class="text">Phone: +84 392 392 210</span></a></li>
                                  <li><span class="text">Email: bookstorep2msupport@gmail.com</span></a></li>
                                        </ul>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr><!-- end: tr -->
              <tr>
                  <td valign="middle" class="bg_black footer email-section">
                      <table>
                      <tr>
                      <td valign="top" width="100%">
                        <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td style="text-align: left; padding-right: 10px;">
                                <p>&copy; 2023 BookstoreP2M. All Rights Reserved</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  </td>
              </tr>
            </table>
          </div>
        </center>
      </body>
      </html>`, // html body
    });
    res.status(200).json({
      message: `Tạo tài khoản thành công, hãy kiểm tra hòm thư để kích hoạt tài khoản!`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const logout = async (req, res, next) => {
  res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Đăng xuất thành công" });
};

const updateProfile = async (req, res) => {
  try {
    const { fullName, phone, address } = req.body;
    const user = await User.findOne({
      where: {
        id_user: req.user.id,
      },
    });
    user.fullName = fullName;
    user.phone = phone;
    user.address = address;
    await user.save();
    res.status(200).json({ message: "Cập nhật thông tin thành công" });
  } catch (error) {
    res.status(500).json({ message: "Cập nhật thông tin thất bại" });
  }
};

const changePassword = async (req, res) => {
  const { oldPassword, newPassword, repeatPassword } = req.body;
  try {
    const user = await User.findOne({
      where: {
        id_user: req.user.id,
      },
    });
    const isAuth = bcrypt.compareSync(oldPassword, user.password);
    if (isAuth) {
      if (newPassword == repeatPassword) {
        if (newPassword == oldPassword) {
          res.status(400).json({
            message: "Mật khẩu mới không được giống với mật khẩu cũ",
          });
        } else {
          //tạo ra một chuỗi ngẫu nhiên
          const salt = bcrypt.genSaltSync(10);
          //mã hoá salt + password
          const hashPassword = bcrypt.hashSync(newPassword, salt);
          user.password = hashPassword;
          await user.save();
          res.status(201).json({
            message: "Đổi mật khẩu thành công",
          });
        }
      } else {
        res.status(400).json({
          message: "Mật khẩu lặp lại không đúng",
        });
      }
    } else {
      res.status(400).json({
        message: "Mật khẩu không chính xác",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Thao tác thất bại",
    });
  }
};

const forgotPassword = async (req, res) => {
  const { username, email } = req.body;
  try {
    const user = await User.findOne({
      where: {
        username,
        email,
      },
    });
    if (user) {
      const randomID = Math.floor(100000 + Math.random() * 999999);
      user.forgot = randomID;
      await user.save();
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "n19dccn107@student.ptithcm.edu.vn", // generated ethereal user
          pass: "dzwedtbaoqsmrkob", // generated ethereal password
        },
      });
      // send mail with defined transport object
      await transporter.sendMail({
        from: "n19dccn107@student.ptithcm.edu.vn", // sender address
        to: `${user.email}`, // list of receivers
        subject: "BOOKSTOREP2M", // Subject line
        text: "BO0KSTOREP2M", // plain text body
        html: `<!DOCTYPE html>
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
            <meta charset="utf-8"> <!-- utf-8 works for most cases -->
            <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
            <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
            <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
            <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
            <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link href="http://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700" rel="stylesheet">
        
            <!-- CSS Reset : BEGIN -->
            <style>
        
                html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            background: #f1f1f1;
        }
        
        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }
        
        div[style*="margin: 16px 0"] {
            margin: 0 !important;
        }
        
        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }
        
        img {
            -ms-interpolation-mode:bicubic;
        }
        
        a {
            text-decoration: none;
        }
        
        *[x-apple-data-detectors],  /* iOS */
        .unstyle-auto-detected-links *,
        .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }
        .a6S {
            display: none !important;
            opacity: 0.01 !important;
        }
        .im {
            color: inherit !important;
        }
        img.g-img + div {
            display: none !important;
        }
        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
            u ~ div .email-container {
                min-width: 320px !important;
            }
        }
        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            u ~ div .email-container {
                min-width: 375px !important;
            }
        }
        @media only screen and (min-device-width: 414px) {
            u ~ div .email-container {
                min-width: 414px !important;
            }
        }
            </style>
            <style>
        .primary{
            background: #448ef6;
        }
        .bg_white{
            background: #ffffff;
        }
        .bg_light{
            background: #fafafa;
        }
        .bg_black{
            background: #000000;
        }
        .bg_dark{
            background: rgba(0,0,0,.8);
        }
        .email-section{
            padding:2.5em;
        }
        .btn{
            padding: 5px 15px;
            display: inline-block;
        }
        .btn.btn-primary{
            border-radius: 30px;
            background: #448ef6;
            color: #ffffff;
        }
        .btn.btn-white{
            border-radius: 30px;
            background: #ffffff;
            color: #000000;
        }
        .btn.btn-white-outline{
            border-radius: 30px;
            background: transparent;
            border: 1px solid #fff;
            color: #fff;
        }
        
        h1,h2,h3,h4,h5,h6{
            font-family: 'Work Sans', sans-serif;
            color: #000000;
            margin-top: 0;
            font-weight: 400;
        }
        
        body{
            font-family: 'Work Sans', sans-serif;
            font-weight: 400;
            font-size: 15px;
            line-height: 1.8;
            color: rgba(0,0,0,.4);
        }
        
        a{
            color: #448ef6;
        }
        
        .logo h1{
            margin: 0;
        }
        .logo h1 a{
            color: #000000;
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
            font-family: 'Poppins', sans-serif;
        }
        
        .navigation{
            padding: 0;
        }
        .navigation li{
            list-style: none;
            display: inline-block;;
            margin-left: 5px;
            font-size: 13px;
            font-weight: 500;
        }
        .navigation li a{
            color: rgba(0,0,0,.4);
        }
        .hero{
            position: relative;
            z-index: 0;
        }
        
        .hero .overlay{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: '';
            width: 100%;
            background: #000000;
            z-index: -1;
            opacity: .3;
        }
        
        .hero .text{
            color: rgba(255,255,255,.9);
        }
        .hero .text h2{
            color: #fff;
            font-size: 50px;
            margin-bottom: 0;
            font-weight: 300;
            line-height: 1;
        }
        .hero .text h2 span{
            font-weight: 600;
            color: #448ef6;
        }
        
        .heading-section h2{
            color: #000000;
            font-size: 28px;
            margin-top: 0;
            line-height: 1.4;
            font-weight: 400;
        }
        .heading-section .subheading{
            margin-bottom: 20px !important;
            display: inline-block;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: rgba(0,0,0,.4);
            position: relative;
        }
        .heading-section .subheading::after{
            position: absolute;
            left: 0;
            right: 0;
            bottom: -10px;
            content: '';
            width: 100%;
            height: 2px;
            background: #448ef6;
            margin: 0 auto;
        }
        
        .heading-section-white{
            color: rgba(255,255,255,.8);
        }
        .heading-section-white h2{
            color: #ffffff;
        }
        .heading-section-white .subheading{
            margin-bottom: 0;
            display: inline-block;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: rgba(255,255,255,.4);
        }
        .text-services .meta{
            text-transform: uppercase;
            font-size: 14px;
            margin-bottom: 0;
        }
        .footer{
            color: rgba(255,255,255,.5);
        
        }
        .footer .heading{
            color: #ffffff;
            font-size: 20px;
        }
        .footer ul{
            margin: 0;
            padding: 0;
        }
        .footer ul li{
            list-style: none;
            margin-bottom: 10px;
        }
        .footer ul li a{
            color: rgba(255,255,255,1);
        }
        @media screen and (max-width: 500px) {
        }
            </style>
        </head>
        
        <body width="100%" style="margin: 0; padding: 0 !important; background-color: #222222;">
            <center style="width: 100%; background-color: #f1f1f1;">
            <div style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
              &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
            </div>
            <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                <!-- BEGIN BODY -->
              <table align="center" role="presentation" cellspacing="0" cellpadding="0" width="100%" style="margin: auto;">
                  <tr>
                  <td valign="top" class="bg_white" style="padding: 1em 2.5em;">
                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      </table>
                  </td>
                  </tr><!-- end tr -->
                  <tr>
                  <td valign="middle" class="hero bg_white" style="background-image: url(http://res.cloudinary.com/dpgjnngzt/image/upload/v1693155759/cc8qb9rmjoxgsl2wx7fe_r9nmrg.webp); background-size: cover; height: 400px;">
                      <div class="overlay"></div>
                    <table>
                        <tr>
                            <td>
                                <div class="text" style="padding: 0 4em; text-align: center;">
                                    <h2>BookstoreP2M Security</h2>
                                    <p style="font-size: 20px;">Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                  </td>
                  </tr><!-- end tr -->
                  <tr>
                    <td class="bg_white email-section">
                        <div class="heading-section" style="text-align: center; padding: 0 30px;">
                          <h2>Your verification code<br>${randomID}</h2>
                          <p style="font-size: 20px;">Thank you for using our service.</p>
                        </div>
                  </td>
                </tr><!-- end: tr -->
              <!-- 1 Column Text + Button : END -->
              </table>
              <table align="center" role="presentation" cellspacing="0" cellpadding="0" width="100%" style="margin: auto;">
                  <tr>
                  <td valign="middle" class="bg_black footer email-section">
                    <table>
                        <tr>
                        <td valign="top" width="33.333%" style="padding-top: 20px;">
                          <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                              <td style="text-align: left; padding-left: 5px; padding-right: 5px;">
                                  <h3 class="heading">Contact Info</h3>
                                  <ul>
                                    <li><span class="text">Address: 123 Nguyen Van A Street,
                                    Ward 4, District 3,
                                    Ho Chi Minh City,
                                    Vietnam</span></li>
                                    <li><span class="text">Phone: +84 392 392 210</span></a></li>
                                    <li><span class="text">Email: bookstorep2msupport@gmail.com</span></a></li>
                                          </ul>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr><!-- end: tr -->
                <tr>
                    <td valign="middle" class="bg_black footer email-section">
                        <table>
                        <tr>
                        <td valign="top" width="100%">
                          <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                              <td style="text-align: left; padding-right: 10px;">
                                  <p>&copy; 2023 BookstoreP2M. All Rights Reserved</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    </td>
                </tr>
              </table>
            </div>
          </center>
        </body>
        </html>`, // html body
      });
      res.status(200).json({
        message: `Mã xác minh đã được gửi về email, vui lòng kiểm tra hòm thư`,
      });
    } else {
      res.status(400).json({
        message: `Thông tin chưa chính xác`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const verify = async (req, res, next) => {
  const { verifyID, username, email } = req.body;
  try {
    const user = await User.findOne({
      where: {
        verifyID,
        username,
        email,
      },
    });
    if (user) {
      res.status(200).json({
        message: `Mã xác nhận chính xác, tiến hành nhập mật khẩu mới`,
      });
    } else {
      res.status(400).json({
        message: `Mã xác nhận không chính xác`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const active = async (req, res, next) => {
  try {
    const { activeID, id_user } = req.query;
    const user = await User.findOne({
      where: {
        id_user,
        activeID,
        isActive: 0,
      },
    });
    let check = {};
    if (user) {
      do {
        await User.destroy({
          where: {
            id_user: {
              [Sequelize.Op.not]: user.id_user,
            },
            email: user.email,
          },
        });
        check = await User.findOne({
          where: {
            id_user: {
              [Sequelize.Op.not]: user.id_user,
            },
            email: user.email,
          },
        });
      } while (check);
      user.isActive = 1;
      user.activeID = 0;
      await user.save();
      res.status(200).json({
        message: `Kích hoạt tài khoản thành công!`,
      });
    } else {
      res.status(400).json({
        message: `Lỗi kích hoạt tài khoản!`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const accessForgotPassword = async (req, res, next) => {
  const { username, password, repeatPassword, email } = req.body;
  if (password != repeatPassword) {
    res.status(400).json({
      message: `Mật khẩu lặp lại không khớp`,
    });
  } else {
    const salt = bcrypt.genSaltSync(10);
    //mã hoá salt + password
    const hashPassword = bcrypt.hashSync(password, salt);
    try {
      const user = await User.findOne({
        where: {
          username,
          email,
        },
      });
      user.password = hashPassword;
      user.forgot = 0;
      await user.save();
      res.status(200).json({
        message: `Lấy lại mật khẩu thành công`,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
};

const login = async (req, res) => {
  try {
    const username = req.body.username;
    const user = await User.findOne({
      where: {
        username,
        isActive: 1,
      },
    });
    if (user) {
      const checkCorrectPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!checkCorrectPassword) {
        return res.status(401).json({ message: "Sai mật khẩu" });
      } else {
        const userInfo = await User.findOne({
          where: {
            username,
          },
          attributes: { exclude: ["password", "verifyID", "activeID"] },
        });
        const token = jwt.sign(
          { id: user.id_user, role: user.role },
          "BOOKSTOREP2M",
          {
            expiresIn: "15d",
          }
        );
        res
          .cookie("accessToken", token, {
            httpOnly: true,
            expires: token.expiresIn,
            sameSite: process.env.ENV === "dev" ? true : "none",
            secure: process.env.ENV === "dev" ? false : true,
          })
          .status(200)
          .json({
            data: userInfo,
            message: "Đăng nhập thành công",
            expireIn: 15 * 60 * 24 * 60,
          });
      }
    } else {
      return res.status(404).json({
        message: "Tài khoản không tồn tại hoặc chưa được kích hoạt!",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
  changePassword,
  forgotPassword,
  verify,
  accessForgotPassword,
  updateProfile,
  logout,
  register,
  active,
};
