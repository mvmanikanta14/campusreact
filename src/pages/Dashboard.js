import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Navbar from "./Navbar";
import {
  BsChevronDown,
  BsBriefcase,
  BsSpeedometer2,
  BsChevronUp,
} from "react-icons/bs";
import { GiSpellBook } from "react-icons/gi";
import { BiPencil, BiTrash } from "react-icons/bi";

import { FiCalendar, FiClock, FiPaperclip } from "react-icons/fi";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { AiOutlineFieldTime } from "react-icons/ai";

export const Dashboard = (props) => {


  // const dispatch=useDispatch();
  // const [loading,setLoading]=useState(false);
  // const [data,setData]=useState({});

  // React.useEffect(()=>{
  //     fetchUserData().then((response)=>{
  //         setData(response.data);
  //     }).catch((e)=>{
  //         localStorage.clear();
  //         props.history.push('/');
  //     })
  // },[])


  return (
    <div className="main-section">
      <Navbar />
      <div className="container-fluid main-section ">
        <div className="section dashboard">
          <div className="title"> Projects </div>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-12">
              <Card>
                <Card.Body>
                  <div className="cat-icon">
                    {" "}
                    <span className="bg-1">
                      {" "}
                      <BsBriefcase />
                    </span>{" "}
                  </div>
                  <div className="card-details">
                    <Card.Title className="text-truncate">
                      Active Client
                    </Card.Title>
                    <p className="cards-count">
                      {" "}
                      825
                      <Badge bg="warning-transpernt" className="float-right">
                        {" "}
                        <BsChevronDown /> 5.25 %{" "}
                      </Badge>{" "}
                    </p>
                    <span> Projects this month </span>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3 col-lg-3 col-sm-12">
              <Card>
                <Card.Body>
                  <div className="cat-icon">
                    {" "}
                    <span className="bg-2">
                      {" "}
                      <GiSpellBook />
                    </span>{" "}
                  </div>
                  <div className="card-details">
                    <Card.Title className="text-truncate">
                      Active Assignments
                    </Card.Title>
                    <p className="cards-count">
                      {" "}
                      825
                      <Badge bg="success-transpernt" className="float-right">
                        {" "}
                        <BsChevronUp /> 1.5 %{" "}
                      </Badge>{" "}
                    </p>
                    <span> Projects this month </span>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3 col-lg-3 col-sm-12">
              <Card>
                <Card.Body>
                  <div className="cat-icon">
                    {" "}
                    <span className="bg-3">
                      {" "}
                      <AiOutlineFieldTime />
                    </span>{" "}
                  </div>
                  <div className="card-details">
                    <Card.Title className="text-truncate">
                      {" "}
                      Total Planned Hours{" "}
                    </Card.Title>
                    <p className="cards-count">
                      {" "}
                      825
                      <Badge bg="warning-transpernt" className="float-right">
                        {" "}
                        <BsChevronDown /> 3.25 %{" "}
                      </Badge>{" "}
                    </p>
                    <span> Projects this month </span>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3 col-lg-3 col-sm-12">
              <Card>
                <Card.Body>
                  <div className="cat-icon">
                    {" "}
                    <span className="bg-4">
                      {" "}
                      <BsSpeedometer2 />
                    </span>{" "}
                  </div>
                  <div className="card-details">
                    <Card.Title className="text-truncate">
                      {" "}
                      Total Performance Hours{" "}
                    </Card.Title>
                    <p className="cards-count">
                      {" "}
                      825
                      <Badge bg="success-transpernt" className="float-right">
                        {" "}
                        <BsChevronUp /> 5.25 %{" "}
                      </Badge>{" "}
                    </p>
                    <span> Projects this month </span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        <div className="section dashboard">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-sm-12">
              <div className="title">
                {" "}
                Today Plans{" "}
                <Badge bg="primary text-white" className="ml-1">
                  {" "}
                  10{" "}
                </Badge>{" "}
              </div>
              <div className="plans">
                <Card>
                  <Card.Body>
                    <div className="card-details">
                      <Card.Title>
                        {" "}
                        <span className="text-success"> #Sag1384 </span>
                        -AnyAudit- Items to Debug- Lay out issues{" "}
                      </Card.Title>
                      <div>
                        <h6> Dashboard widgets redesign</h6>
                        <p>
                          {" "}
                          Scoping Popup in Assignment level checklist &
                          Questionnaire (select2 & checkboxes places){" "}
                        </p>
                      </div>
                    </div>
                  </Card.Body>

                  <div class="plan-foot ">
                    <div className="row">
                      <div className="col-md-5 col-lg-5 col-xs-5">
                        {" "}
                        <p>
                          {" "}
                          <FiCalendar /> 07 Jan 2023 &nbsp; &nbsp;
                          <FiPaperclip /> no attactments{" "}
                        </p>{" "}
                      </div>
                      <div className="col-md-7 col-lg-7 col-xs-7 text-right">
                        <p>
                          {" "}
                          <FiClock /> Planned Hrs : 1.00 &nbsp; &nbsp;
                          <span className="text-success">
                            {" "}
                            <FiClock /> Planned Hrs : 1.00{" "}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <Card.Body>
                    <div className="card-details">
                      <Card.Title>
                        {" "}
                        <span className="text-success"> #Sag1384 </span>
                        -AnyAudit- Items to Debug- Lay out issues{" "}
                      </Card.Title>
                      <div>
                        <h6> Dashboard widgets redesign</h6>
                        <p>
                          {" "}
                          Scoping Popup in Assignment level checklist &
                          Questionnaire (select2 & checkboxes places){" "}
                        </p>
                      </div>
                    </div>
                  </Card.Body>

                  <div className="plan-foot ">
                    <div className="row">
                      <div className="col-md-5 col-lg-5 col-xs-5">
                        {" "}
                        <p>
                          {" "}
                          <FiCalendar /> 07 Jan 2023 &nbsp; &nbsp;
                          <FiPaperclip /> no attactments{" "}
                        </p>{" "}
                      </div>
                      <div className="col-md-7 col-lg-7 col-xs-7 text-right">
                        <p>
                          {" "}
                          <FiClock /> Planned Hrs : 1.00 &nbsp; &nbsp;
                          <span className="text-success">
                            {" "}
                            <FiClock /> Planned Hrs : 1.00{" "}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <Card.Body>
                    <div className="card-details">
                      <Card.Title>
                        {" "}
                        <span className="text-success"> #Sag1384 </span>
                        -AnyAudit- Items to Debug- Lay out issues{" "}
                      </Card.Title>
                      <div>
                        <h6> Dashboard widgets redesign</h6>
                        <p>
                          {" "}
                          Scoping Popup in Assignment level checklist &
                          Questionnaire (select2 & checkboxes places){" "}
                        </p>
                      </div>
                    </div>
                  </Card.Body>

                  <div className="plan-foot ">
                    <div className="row">
                      <div className="col-md-5 col-lg-5 col-xs-5">
                        {" "}
                        <p>
                          {" "}
                          <FiCalendar /> 07 Jan 2023 &nbsp; &nbsp;
                          <FiPaperclip /> no attactments{" "}
                        </p>{" "}
                      </div>
                      <div className="col-md-7 col-lg-7 col-xs-7 text-right">
                        <p>
                          {" "}
                          <FiClock /> Planned Hrs : 1.00 &nbsp; &nbsp;
                          <span className="text-success">
                            {" "}
                            <FiClock /> Planned Hrs : 1.00{" "}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="title">
                {" "}
                Pending Plans{" "}
                <Badge bg="warning text-white" className="ml-1">
                  {" "}
                  10{" "}
                </Badge>{" "}
              </div>

              <div className="plans">
                <Card>
                  <Card.Body>
                    <div className="card-details">
                      <Card.Title>
                        {" "}
                        <span className="text-warning"> #Sag1384 </span>-
                        AnyAudit- Items to Debug{" "}
                      </Card.Title>
                      <div>
                        <h6> Dashboard widgets redesign</h6>
                        <p>
                          {" "}
                          Scoping Popup in Assignment level checklist &
                          Questionnaire (select2 & checkboxes places){" "}
                        </p>
                      </div>
                    </div>
                  </Card.Body>

                  <div className="plan-foot ">
                    <div className="row">
                      <div className="col-md-5 col-lg-5 col-xs-5">
                        {" "}
                        <p>
                          {" "}
                          <FiCalendar /> 07 Jan 2023 &nbsp; &nbsp;
                          <FiPaperclip />{" "}
                        </p>{" "}
                      </div>
                      <div className="col-md-7 col-lg-7 col-xs-7 text-right">
                        <p>
                          {" "}
                          <FiClock /> Planned Hrs : 1.00 &nbsp; &nbsp;
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <Card.Body>
                    <div className="card-details">
                      <Card.Title>
                        {" "}
                        <span className="text-warning"> #Sag1384 </span>-
                        AnyAudit- Items to Debug{" "}
                      </Card.Title>
                      <div>
                        <h6> Dashboard widgets redesign</h6>
                        <p>
                          {" "}
                          Scoping Popup in Assignment level checklist &
                          Questionnaire (select2 & checkboxes places){" "}
                        </p>
                      </div>
                    </div>
                  </Card.Body>

                  <div className="plan-foot ">
                    <div className="row">
                      <div className="col-md-5 col-lg-5 col-xs-5">
                        {" "}
                        <p>
                          {" "}
                          <FiCalendar /> 07 Jan 2023 &nbsp; &nbsp;
                          <FiPaperclip />{" "}
                        </p>{" "}
                      </div>
                      <div className="col-md-7 col-lg-7 col-xs-7 text-right">
                        <p>
                          {" "}
                          <FiClock /> Planned Hrs : 1.00 &nbsp; &nbsp;
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="section mt-3">
          <div className="row">
            <div className="col-md-4 col-lg-4 milestones">
              <Card>
                <div className="c-header">
                  <Card.Title>
                    {" "}
                    My Milestones
                    <div className="right-actions">
                      <DropdownButton align="end" title="All" size="sm">
                        <Dropdown.Item as="button"> All</Dropdown.Item>
                        <Dropdown.Item as="button">
                          {" "}
                          Close Milestones{" "}
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </Card.Title>
                </div>

                <Card.Body>
                  <Table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>code review and push </td>
                        <td>22/03/2023</td>
                        <td>01/04/2023 </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>Section Comparision </td>
                        <td>22/03/2023</td>
                        <td>01/04/2023 </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td> quality control and signoff reports </td>
                        <td>22/03/2023</td>
                        <td>01/04/2023 </td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>Anyaudit replica project </td>
                        <td>22/03/2023</td>
                        <td>01/04/2023 </td>
                      </tr>

                      <tr>
                        <td>5</td>
                        <td> Risk (Including Fraud) Assessment checklist </td>
                        <td>22/03/2023</td>
                        <td>01/04/2023 </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-lg-4 milestones">
              <Card>
                <div className="c-header">
                  <Card.Title>
                    {" "}
                    Audit Communications
                    <div className="right-actions">
                      <DropdownButton align="end" title="All" size="sm">
                        <Dropdown.Item as="button"> All</Dropdown.Item>
                        <Dropdown.Item as="button">
                          {" "}
                          Close Milestones{" "}
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </Card.Title>
                </div>

                <Card.Body>
                  <div className="table-responsive">
                    <Table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Description</th>
                          <th>Start Date</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td> communication from checklist.... </td>
                          <td>22/03/2023</td>
                          <td>
                            {" "}
                            <Badge bg="warning-transpernt">
                              {" "}
                              Pending{" "}
                            </Badge>{" "}
                          </td>
                          <td>
                            {" "}
                            <BiPencil /> &nbsp; <BiTrash />{" "}
                          </td>
                        </tr>

                        <tr>
                          <td>2</td>
                          <td>Section Comparision </td>
                          <td>22/03/2023</td>
                          <td>
                            {" "}
                            <Badge bg="success-transpernt">
                              {" "}
                              Completed{" "}
                            </Badge>{" "}
                          </td>
                          <td>
                            {" "}
                            <BiPencil /> &nbsp; <BiTrash />{" "}
                          </td>
                        </tr>

                        <tr>
                          <td>3</td>
                          <td> quality control and signoff reports </td>
                          <td>22/03/2023</td>
                          <td>
                            {" "}
                            <Badge bg="warning-transpernt">
                              {" "}
                              Pending{" "}
                            </Badge>{" "}
                          </td>
                          <td>
                            {" "}
                            <BiPencil /> &nbsp; <BiTrash />{" "}
                          </td>
                        </tr>

                        <tr>
                          <td>4</td>
                          <td>Anyaudit replica project </td>
                          <td>22/03/2023</td>
                          <td>
                            {" "}
                            <Badge bg="warning-transpernt">
                              {" "}
                              Intiated{" "}
                            </Badge>{" "}
                          </td>
                          <td>
                            {" "}
                            <BiPencil /> &nbsp; <BiTrash />{" "}
                          </td>
                        </tr>

                        <tr>
                          <td>5</td>
                          <td> Risk (Including Fraud) </td>
                          <td>22/03/2023</td>
                          <td>
                            {" "}
                            <Badge bg="success-transpernt">
                              {" "}
                              Completed{" "}
                            </Badge>{" "}
                          </td>
                          <td>
                            {" "}
                            <BiPencil /> &nbsp; <BiTrash />{" "}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-lg-4 milestones">
              <Card>
                <div className="c-header">
                  <Card.Title>
                    {" "}
                    Audit Memo
                    <div className="right-actions">
                      <DropdownButton align="end" title="All" size="sm">
                        <Dropdown.Item as="button"> All</Dropdown.Item>
                        <Dropdown.Item as="button">
                          {" "}
                          Close Milestones{" "}
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </Card.Title>
                </div>

                <Card.Body>
                  <div className="table-responsive">
                    <Table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Description</th>
                          <th>Start Date</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td> communication from checklist.... </td>
                          <td>22/03/2023</td>
                          <td>
                            {" "}
                            <Badge bg="warning-transpernt">
                              {" "}
                              Pending{" "}
                            </Badge>{" "}
                          </td>
                          <td>
                            {" "}
                            <BiPencil /> &nbsp; <BiTrash />{" "}
                          </td>
                        </tr>

                        <tr>
                          <td>2</td>
                          <td>Section Comparision </td>
                          <td>22/03/2023</td>
                          <td>
                            {" "}
                            <Badge bg="success-transpernt">
                              {" "}
                              Completed{" "}
                            </Badge>{" "}
                          </td>
                          <td>
                            {" "}
                            <BiPencil /> &nbsp; <BiTrash />{" "}
                          </td>
                        </tr>

                        <tr>
                          <td>3</td>
                          <td> quality control and signoff reports </td>
                          <td>22/03/2023</td>
                          <td>
                            {" "}
                            <Badge bg="warning-transpernt">
                              {" "}
                              Pending{" "}
                            </Badge>{" "}
                          </td>
                          <td>
                            {" "}
                            <BiPencil /> &nbsp; <BiTrash />{" "}
                          </td>
                        </tr>

                        <tr>
                          <td>4</td>
                          <td>Anyaudit replica project </td>
                          <td>22/03/2023</td>
                          <td>
                            {" "}
                            <Badge bg="warning-transpernt">
                              {" "}
                              Intiated{" "}
                            </Badge>{" "}
                          </td>
                          <td>
                            {" "}
                            <BiPencil /> &nbsp; <BiTrash />{" "}
                          </td>
                        </tr>

                        <tr>
                          <td>5</td>
                          <td> Risk (Including Fraud) </td>
                          <td>22/03/2023</td>
                          <td>
                            {" "}
                            <Badge bg="success-transpernt">
                              {" "}
                              Completed{" "}
                            </Badge>{" "}
                          </td>
                          <td>
                            {" "}
                            <BiPencil /> &nbsp; <BiTrash />{" "}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
