const express= require('express');
const bodyParser= require('body-parser');
const app= express();
const cors = require('cors');
const port= 3000;
const metricRouter = require('./routes/Metric');
const brandRouter = require('./routes/Brand');
const categoryRouter = require('./routes/Category');
const productRouter = require('./routes/Product');
const supplierRouter = require('./routes/Supplier');
const userRouter = require('./routes/User');
const settingRouter = require('./routes/Setting');
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({
	extended:true
}));

app.get('/',(req,res)=>{

res.json({'message':'Welcome to b2b Apis'});
});
app.use('/metric', metricRouter);
app.use('/brand', brandRouter);
app.use('/category',categoryRouter);
app.use('/product', productRouter);
app.use('/supplier', supplierRouter);
app.use('/user',userRouter);
app.use('/setting',settingRouter);
app.listen(port,()=>{
console.log(`Server is running on port no http://localhost:${port}`);

}
)