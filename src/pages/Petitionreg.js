import React from 'react'
import "./MultiStepProgressBar.css";
import { FormGroup, Label, Input } from "reactstrap";
import {
  Form,
  Card,
  CardHeader,
  CardBody,
  Container, Row, Col

} from "reactstrap";
import { Helmet } from "react-helmet";


const Petitionreg = () => {
  return (
    <>
<div className="main">
      <Helmet>
        <style>{"body { background-image:url(https://th.bing.com/th/id/OIP.a7zcxkWpyz-ZV0e_dRu_WwHaEl?pid=ImgDet&w=1280&h=792&rs=1); background-size: cover; }"}</style>
      </Helmet>
      <Container>
        <Row>
          <Col>
             <div class="">
        <Form >
          <Card>
            <CardHeader className="header">Create your Petition</CardHeader>
            <CardBody className="pl-16 pr-16 pb-16">

        <Label className="textFeild">Petition Name</Label>
       
        <Input type="text" name="requiredField campaignname" placeholder="Enter your campaign name" className="outline-none py-2 pr-4 white block w-full textstyle"
        required
          />
  {/* {errors.requiredField && <span>This field is required</span>} */}
      
          <Label className="textFeild">Discription</Label>
        <textarea name="discription" cols={40} rows={5} placeholder="Enter your Campaign details " className="outline-none white py-2 pr-4  block w-full textstyle"
          required
          />

            </CardBody>
          </Card>
        </Form>
        </div>

          </Col>
        </Row>
      </Container>

   </div>
       
    </>
  )
}

export default Petitionreg
