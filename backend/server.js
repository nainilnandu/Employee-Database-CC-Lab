const express = require("express");


const app = express();
require("./startups/cors")(app);
app.use(express.json({ limit: '50mb' }));
const { mongofunction } = require("./startups/mongodb");
const User = require("./UserTable");
const Auth = require("./AuthTable");
const Salary = require("./SalaryTable");


mongofunction(app);

app.get("/api/get-user/:employee_ID", async (req, res) => {
    console.log(req.params.employee_ID);
    try {
        const user = await User.find({ employee_ID: req.params.employee_ID });
        console.log(user);
        res.status(200).send(user[0]);
    } catch (error) {
        console.log(error);
        res.status(500).send("error while getting user.")
    }
})

app.get("/api/get-salary/:employee_ID", async (req, res) => {
    console.log(req.params.employee_ID);
    try {
        const user = await User.find({ employee_ID: req.params.employee_ID });
        const salary = await Salary.find({ employee_ID: req.params.employee_ID });
        console.log(user);
        res.status(200).send({ user: user[0], salary: salary[0] });
    } catch (error) {
        console.log(error);
        res.status(500).send("error while getting user.")
    }
})

app.post("/api/login", async (req, res) => {
    const { employee_ID, password } = req.body.user;
    console.log(req.body.user);

    if (!employee_ID || !password) {
        return res
            .status(400)
            .send({ error: 'Please provide both a employee_ID and a password.' });
    }

    try {
        const user = await User.findOne({ employee_ID });
        if (!user) {
            return res.status(401).send({
                error: 'The credentials you provided are incorrect, please try again.',
            });
        }
        console.log(user);
        const auth = await Auth.findOne({ employee_ID })
        console.log(auth);
        if (password != auth.password) {
            return res.status(400).send("Wrong password");
        }
        else {
            return res.status(200).send({ user, auth });
        }
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
})
app.post("/api/signup", async (req, res) => {
    const { employee_ID, firstName, lastName, dob, contact, password } = req.body.user
    console.log(req.body.user);
    try {
        const user = User({
            employee_ID,
            firstName,
            lastName,
            dob,
            contact
        });

        const auth = Auth({
            employee_ID,
            password
        })
        const salary = Salary({
            employee_ID,
            jobRole: "Professor",
            monthlySalary: "800000",
            yearlyBonus: "20000"
        })

        await user.save();
        await auth.save();
        await salary.save();
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send("error while adding user.")
    }
});



const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listening on port ${port}...`));