//Imports
import axios from "axios";
import { apiUrl } from "../../App";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//Assets/Styles
import "./InventoryItemDetails.scss";
import editIcon from "../../assets/icons/edit-24px.svg";
import backArrow from "../../assets/images/icons/arrow_back-24px.svg";
//Components
import Button from "../Button/Button";

export default function InventoryItemDetails() {
	//enable navigation:
	const navigate = useNavigate();
	//hold current item details in state:
	const [inventoryItemDetails, setInventoryItemDetails] = useState([]);
	//get warehouse name using warehouse ID:
	const [warehouseName, setWarehouseName] = useState();
	//grab id from URL params:
	const { id } = useParams();

	return <div></div>;
}
