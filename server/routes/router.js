let express = require("express");
let router = express.Router();
let userController = require("../user-controller/usercontroller")
  .userController;
let carouselController = require("../user-controller/usercontroller")
  .carouselController;
let AddMainCatsController = require("../user-controller/usercontroller")
  .AddMainCatsController;
sliderController = require("../user-controller/usercontroller")
  .sliderController;
let SubCatController = require("../user-controller/usercontroller")
  .subCatController;
let OrderedProductsCatController = require("../user-controller/usercontroller")
  .OrderedProductsCatController;
let subscriptionController = require("../user-controller/usercontroller")
  .subscriptionController;
var nodemailer = require("nodemailer");
let orderSchema = require("../db/models/buyNowSchema");
let subCatSchem = require("../db/models/subCatSchema");
let mainCrousel = require("../db/models/carouselSchema");
const slider = require("../db/models/sliderSchema");
let passport = require("../authentication/authentication");
let multer = require("multer");
var jwt = require("jsonwebtoken");
let bodyParser = require("body-parser");
router.use(bodyParser.urlencoded());
router.use(bodyParser.json());
// const accountSid = "AC3de36e835edc276f0f86c2bfa06bc851";
// const authToken = "6186680f3dcf8f19ac7950ba2b66ccd2";
// const client = require("twilio")(accountSid, authToken);
let fs = require("fs");

let storageconf = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, require("path").resolve(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
let conf = multer({ storage: storageconf });

// multer for home slider items
let sliderconf = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, require("path").resolve(__dirname, "../sliderUploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
let sliderConf = multer({ storage: sliderconf });

let subCatuploadsmul = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, require("path").resolve(__dirname, "../subcatuploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
let subCatConf = multer({ storage: subCatuploadsmul });

var customConfig = multer.diskStorage({
  destination: function (req, file, next) {
    next(null, require("path").resolve(__dirname, "../subcatuploads"));
  },
  filename: function (req, file, next) {
    next(null, Math.floor(Math.random() * 100000000) + "-" + file.originalname);
  },
});
var upload = multer({ storage: customConfig }).single("file");

router.post("/filehandler", (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      console.log("errpr");
    } else if (err) {
      // An unknown error occurred when uploading.
      console.log("errpr");
    }
    res.json(req.file);

    // Everything went fine.
  });
});
router.post("/uploads", conf.single("file"), function (req, res) {
  let newBody = JSON.parse(JSON.stringify(req.body));
  newBody.file = "/uploads/" + req.file.originalname;
  carouselController.saveData(newBody, function (err, user) {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});

router.get("/showCrouselProduct", function (req, res) {
  mainCrousel.find({}, function (err, mainCrousel) {
    if (err) {
      res.send(500);
    } else {
      res.json(mainCrousel);
    }
  });
});

router.post("/newproductuploads",  (req, res)=> {
  let newBody =req.body
  // newBody.file = '/uploads/' + req.file.originalname
  // let getimages = req.files;
  // let a = getimages.map((image) => {
  //   return "/subcatuploads/" + image.filename;
  // });
  // // console.log(a);
  // newBody.file = a;
  SubCatController.saveData(newBody, function (err, user) {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});
router.post("/sliderUploads", sliderConf.array("file", 3), function (req, res) {
  let newBody = JSON.parse(JSON.stringify(req.body));
  // newBody.file = '/uploads/' + req.file.originalname
  let getimages = req.files;
  let a = getimages.map((image) => {
    return "/sliderUploads/" + image.filename;
  });
  // console.log(a);
  newBody.file = a;
  sliderController.saveData(newBody, function (err, user) {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});
router.get("/getSliderProducts", function (req, res) {
  slider
    .find({})
    .sort({ _id: "desc" })
    .exec((err, searchdata) => {
      if (err) {
        return res.json({ success: false, err: err });
      }

      // console.log("data", searchdata);

      res.json(searchdata);
    });
});
// get Maahru
router.get("/showSubCatMaahruPro", (req, res) => {
  subCatSchem
    .find({ mainCat: "Saphona", subCat: "Maahru" })
    .sort({ _id: "desc" })
    .exec((err, searchdata) => {
      if (err) {
        return res.json({ success: false, err: err });
      } else {
        res.json({ success: true, searchdata });
      }
    });
});
// get Noor-ul-ain
router.get("/showSubNoorAinPro", (req, res) => {
  subCatSchem
    .find({ mainCat: "Saphona", subCat: "Noor-ul-ain" })
    .sort({ _id: "desc" })
    .exec((err, searchdata) => {
      if (err) {
        return res.json({ success: false, err: err });
      }
      res.json(searchdata);
    });
});
// get Noor-e-Chashm
router.get("/showSubNoorEChashmPro", (req, res) => {
  subCatSchem
    .find({ mainCat: "Saphona", subCat: "Noor-e-chashm" })
    .sort({ _id: "desc" })
    .exec((err, searchdata) => {
      if (err) {
        return res.json({ success: false, err: err });
      } else {
        res.json({ success: true, searchdata });
      }
    });
});
// get Fusion
router.get("/showSubCatFusionPro", (req, res) => {
  subCatSchem
    .find({ mainCat: "Aura", subCat: "Fusion" })
    .sort({ _id: "desc" })
    .exec((err, searchdata) => {
      if (err) {
        return res.json({ success: false, err: err });
      }
      res.json(searchdata);
    });
});
// get luxury
router.get("/showSubLuxuryPro", (req, res) => {
  subCatSchem
    .find({ mainCat: "Aura", subCat: "Luxury" })
    .sort({ _id: "desc" })
    .exec((err, searchdata) => {
      if (err) {
        return res.json({ success: false, err: err });
      }
      res.json(searchdata);
    });
});
// get Print
router.get("/showSubPrintPro", (req, res) => {
  subCatSchem
    .find({ mainCat: "Aura", subCat: "Print" })
    .sort({ _id: "desc" })
    .exec((err, searchdata) => {
      if (err) {
        return res.json({ success: false, err: err });
      }
      res.json(searchdata);
    });
});
// signup
router.post("/signup", function (req, res) {
  // console.log(req.body);
  userController.onSignup(req.body, function (err, user) {
    if (err) {
      res.json({ success: false });
      console.log(err);
    } else {
      res.json({ success: true });
    }
  });
});
router.post("/signin_adminpanel", function (req, resp, next) {
  // console.log(req.body);
  passport.authenticate("local", function (err, user) {
    if (user) {
      req.login(user, (user) => {
        resp.json(req.user);
      });
    } else {
      resp.json({ success: false });
    }
  })(req, resp, next);
});
router.delete("/deleteProducts/:id", function (req, res) {
  // let filePath = 'E:/Gamica project/clientProject/brandclothing-master/server' + req.body.file;
  subCatSchem.findByIdAndDelete(req.params.id, (err, users) => {
    console.log(users.file);
    console.log(require("path").resolve(__dirname, "../subcatuploads"));
    users.file.forEach((item) => {
      // console.log(filePath);
      if (err) {
        res.send(500);
      } else {
        fs.unlinkSync(
          (filepath = require("path").resolve(__dirname, "../") + item),
          function () {
            // res.redirect('/');
          }
        );
      }
    });
    res.json({ success: true });
  });
});
router.delete("/deleteNoorAinProducts/:id", function (req, res) {
  // let filePath = 'E:/Gamica project/clientProject/brandclothing-master/server' + req.body.file;
  subCatSchem.findByIdAndDelete(req.params.id, (err, users) => {
    users.file.forEach((item) => {
      // console.log(filePath);
      if (err) {
        res.send(500);
      } else {
        fs.unlinkSync(
          (filepath = require("path").resolve(__dirname, "../") + item),
          function () {
            // res.redirect('/');
          }
        );
      }
    });
    res.json({ success: true });
  });
});
router.delete("/deleteNoorChashmProducts/:id", function (req, res) {
  // let filePath = 'E:/Gamica project/clientProject/brandclothing-master/server' + req.body.file;
  subCatSchem.findByIdAndDelete(req.params.id, (err, users) => {
    users.file.forEach((item) => {
      // console.log(filePath);
      if (err) {
        res.send(500);
      } else {
        fs.unlinkSync(
          (filepath = require("path").resolve(__dirname, "../") + item),
          function () {
            // res.redirect('/');
          }
        );
      }
    });
    res.json({ success: true });
  });
});
router.post("/buyNow", function (req, res) {
  // console.log(req.body);
  OrderedProductsCatController.saveData(req.body.orderDetails, function (
    err,
    user
  ) {
    if (err) {
      res.json({ success: false });
      console.log(err);
    } else {
      res.json({ success: true });
    }
  });
});
router.get("/getOrderedProducts", function (req, res) {
  orderSchema.find({}, function (err, orderSchema) {
    if (err) {
      res.send(500);
    } else {
      res.json(orderSchema);
    }
  });
});
router.put("/updateActiveProduct/:woid", function (req, res) {
  // let getBody = JSON.parse(JSON.stringify(req.body));
  orderSchema.findByIdAndUpdate(
    { _id: req.params.woid },
    { status: "Completed" },
    function (err, user) {
      if (err) {
        res.send(500);
      } else {
        res.json({ success: true, user });
      }
    }
  );
});

//LOgin ADmin

router.post("/admin-login", async (req, res) => {
  const admins = [
    {
      email: "saphonaofficial@yahoo.com",
      password: "41yy4/P76!58W!r",
    },
  ];

  const { Email, Password } = req.body;
  try {
    admins.map((admin) => {
      if (Email == admin.email && Password == admin.password) {
        //JsonWebToken

        const payload = {
          user: {
            id: admin.email,
          },
        };
        jwt.sign(payload, "JWTSECRET", { expiresIn: 360000 }, (err, token) => {
          if (err) throw err;
          res.json({ token });
        });
      } else {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// subscription
router.post("/subscription", function (req, res) {
  subscriptionController.subscription(req.body, function (err, user) {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  });

  var nodemailer = require("nodemailer");
  var myvalue = req.body.email;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ekapraycontactus@gmail.com",
      pass: "ahmadtariq",
    },
  });

  var mailOptions = {
    from: "ekapraycontactus@gmail.com",
    to: myvalue,
    subject: "Ekapray",
    text:
      "Thanks for subscribing us we will send you all latest updates Regards: Ekapray",
  };

  var mailOption = {
    from: "ekaprayy@gmail.com",
    to: "ekaprayy@gmail.com",
    subject: "Ekapray-Subscription",
    text: myvalue + " has subscribed on Ekapray",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.json({ success: true });
    }
  });
  transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.json({ success: true });
    }
  });
});
// router.post("/buyNow", function(req, res) {
//   // console.log(req.body.a);
//   // data= req.body.a

//   client.messages
//     .create({
//       body: "ThankYou For Shopping.!! Regards:Saphona ",
//       from: "+1 201 801 4927",
//       to: "+923006600788"
//     })
//     .then(message => console.log(message.sid))
//     .catch(Err => {
//       console.log(Err);
//     });
// });
module.exports = router;
