import Header from "components/Headers/Header";
import React, { Component } from "react";
// import { connect } from "react-redux";
import Button from "reactstrap/lib/Button";
import Card from "reactstrap/lib/Card";

import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import Col from "reactstrap/lib/Col";
import {fetchcategories} from '../../redux/auth/actions/categoriesActions'
import {fetchproviders , editProviders} from '../../redux/auth/actions/providersActions'
import {connect} from 'react-redux'
import Container from "reactstrap/lib/Container";
import Form from "reactstrap/lib/Form";
import Input from "reactstrap/lib/Input";
import Label from "reactstrap/lib/Label";
import Modal from "reactstrap/lib/Modal";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalHeader from "reactstrap/lib/ModalHeader";
import Row from "reactstrap/lib/Row";
import Table from "reactstrap/lib/Table";
import Dropdown from "reactstrap/lib/Dropdown";

// import {
// 	mapStateToProps,
// 	mapDispatchToProps,
// } from "../../redux/posts/selector";

class Providers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// add_post_modal: false,
			edit_Provider_modal: false,
			id: "",
			fullName: "",
			phoneNumber: "",
			user_id:"",
			categoryId:''
		};
	}
	

	



	componentDidMount() {
		this.props.fetchcategories();
		this.props.fetchproviders();
		
		
	}

	editProviderToggle = () => {
		this.setState({
            edit_Provider_modal: !this.state.edit_Provider_modal,
         
		});
	
	};

	onChange = (e) => {
		this.setState({
			
			[e.target.name]: e.target.value,
		});
	};

	render() {
	
		return (
			<div>
				<Header />
				<Container className="mt--9" fluid>
                     <br />
                    <br /> 
						
					<Row>
						<div className="col">
							<Card className="shadow">
								<CardHeader className="border-0">
									<span className="mb-0 text-warning">Provider</span>
								</CardHeader>
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th>Full Name</th>
											<th>phoneNumber</th>
											{/* <th>Contact</th> */}
											<th>Actions</th>
											
										</tr>
									</thead>
									<tbody >
									  {this.props.providers.map((items , index)=>{
										  return(
										  <tr key={index}>
                                             <td>{items.fullName}</td>
											 <td>{items.phoneNumber}</td>
											
											 <td>
											 <Button
													onClick={() => {

															
                                                               	this.setState({
																	edit_Provider_modal: !this.state.edit_Provider_modal,
																	fullName: items.fullName,
																	phoneNumber: items.phoneNumber,
																	categortId:items.categortId,
																	user_id:items._id

																});
																
															}}	
															
                                                                

															size="sm"
															color="white"
															
														>
															<i className="ni ni-settings  " />
														</Button>
														
											 </td>
										  </tr>
										  )
									  })}
									  
							
												 
									
									</tbody>
								</Table>
							</Card>
						</div>
					</Row>
					
					<Modal
						isOpen={this.state.edit_Provider_modal}
						toggle={this.editProviderToggle}
					>
						<ModalHeader toggle={this.editProviderToggle}>
							<span className="text-warning">Edit Post</span>
						</ModalHeader>
						<ModalBody>
							<Form onSubmit={e => e.preventDefault()}>
								<Input type="hidden" value={this.state.fullName} />
								<Label>fullName</Label>
								<Input
									className="post_title"
									type="fullName"

									value={this.state.fullName}
									name="fullName"
									onChange={this.onChange}
									// onChange={e => this.onChange(e)}
									required={true}
								></Input>
								<Label>phoneNumber</Label>
								<Input
									
									className="post_description"
									rows={4}

									name="phoneNumber"
									value={this.state.phoneNumber}
									onChange={this.onChange}
									required={true}
								></Input>	
								{/* <Label>Conatact</Label>
								<Input
									// type="textarea"
									className="post_description"
									rows={4}
									
									onChange={this.onChange}
									required={true}
								></Input> */}
								<br/>
							
                                <select value={this.state.categoryId} onChange={this.onChange} name="categoryId"  className="form-control"  >

                                         {this.props.categories.map((items , index)=>{

											 return(
												
											 <option  key={index} value={items._id}>{items.categoryName}</option>
											
											 )
										 })}
                                        
                                    </select>
									
								<Row>
									<Col className="text-right">
										<Button
											className="mt-2"
											onClick={() => {
												this.props.editProviders( {
												
													user_id: this.state.user_id,
													categoryId: this.state.categoryId,
												});
												this.editProviderToggle();
											}}
											size="md"
											color="warning"
										>
											Update
										</Button>
									</Col>
								</Row>
							</Form>
						</ModalBody>
					</Modal>
				</Container>
			</div>
		);
	}
}

export function mapStateToProps(state) {
	return {
	
	
		categories:state.categories.categories,
		providers:state.provider.providers
		
		
		
	};
}

export default connect(mapStateToProps  , {fetchcategories , fetchproviders  , editProviders})(Providers)
