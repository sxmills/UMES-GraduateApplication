function app_start() {document.getElementsByClassName("nav_box")[0].click();}
if (document.addEventListener)
{
	document.getElementsByClassName("nav_box")[0].addEventListener("click", nav_box_click, false);
	window.addEventListener("load", app_start, false);
	document.addEventListener("scroll", navigation_container, false);
	window.addEventListener("resize", navigation_container, false);
	window.addEventListener("resize", nav_box_fontsize, false);
	document.getElementsByName("country")[0].addEventListener("click", country_stateprovince, false);
	document.getElementsByName("contact_address_country")[0].addEventListener("click", country_stateprovince, false);
	document.getElementsByName("usa_citizenship_status")[0].addEventListener("click", personal_info_usacitizenship, false);
	document.getElementsByName("first_time_grad")[0].addEventListener("click", application_info_explanation, false);
	document.getElementsByName("prev_app_grad")[0].addEventListener("click", application_info_explanation, false);
	document.getElementsByName("criminal")[0].addEventListener("click", application_info_explanation, false);
	document.getElementsByName("maryland_resident")[0].addEventListener("click", residency_data_resident, false);
	document.getElementsByName("financial_aid")[0].addEventListener("click", residency_data_financial_aid, false);
	document.getElementsByName("registered_to_vote")[0].addEventListener("click", residency_data_registered_to_vote, false);
	document.getElementsByName("driver's_license")[0].addEventListener("click", residency_data_drivers_license, false);
	document.getElementsByName("owned_motor_vehicles")[0].addEventListener("click", residency_data_owned_motor_vehicles, false);
	document.getElementsByName("income_tax")[0].addEventListener("click", residency_data_income_tax, false);
}
else if (document.attachEvent)
{
	document.getElementsByClassName("nav_box")[0].attachEvent("onclick", nav_box_click);
	window.attachEvent("onload", app_start);
	document.attachEvent("onscroll", navigation_container);
	window.attachEvent("onresize", navigation_container);
	window.attachEvent("onresize", nav_box_fontsize);
	document.getElementsByName("country")[0].attachEvent("onclick", country_stateprovince);
	document.getElementsByName("contact_address_country")[0].attachEvent("onclick", country_stateprovince);
	document.getElementsByName("usa_citizenship_status")[0].attachEvent("onclick", personal_info_usacitizenship);
	document.getElementsByName("first_time_grad")[0].attachEvent("onclick", application_info_explanation);
	document.getElementsByName("prev_app_grad")[0].attachEvent("onclick", application_info_explanation);
	document.getElementsByName("criminal")[0].attachEvent("onclick", application_info_explanation);
	document.getElementsByName("maryland_resident")[0].attachEvent("onclick", residency_data_resident);
	document.getElementsByName("financial_aid")[0].attachEvent("onclick", residency_data_financial_aid);
	document.getElementsByName("registered_to_vote")[0].attachEvent("onclick", residency_data_registered_to_vote);
	document.getElementsByName("driver's_license")[0].attachEvent("onclick", residency_data_drivers_license);
	document.getElementsByName("owned_motor_vehicles")[0].attachEvent("onclick", residency_data_owned_motor_vehicles);
	document.getElementsByName("income_tax")[0].attachEvent("onclick", residency_data_income_tax);
}
else
{
	document.getElementsByClassName("nav_box")[0].onclick = nav_box_click;
	window.onload = app_start;
	document.onscroll = navigation_container;
	window.onresize = navigation_container;
	window.onresize = nav_box_fontsize;
	document.getElementsByName("country")[0].onclick = country_stateprovince;
	document.getElementsByName("contact_address_country")[0].onclick = country_stateprovince;
	document.getElementsByName("usa_citizenship_status")[0].onclick = personal_info_usacitizenship;
	document.getElementsByName("first_time_grad")[0].onclick = application_info_explanation;
	document.getElementsByName("prev_app_grad")[0].onclick = application_info_explanation;
	document.getElementsByName("criminal")[0].onclick = application_info_explanation;
	document.getElementsByName("maryland_resident")[0].onclick = residency_data_resident;
	document.getElementsByName("financial_aid")[0].onclick = residency_data_financial_aid;
	document.getElementsByName("registered_to_vote")[0].onclick = residency_data_registered_to_vote;
	document.getElementsByName("driver's_license")[0].onclick = residency_data_drivers_license;
	document.getElementsByName("owned_motor_vehicles")[0].onclick = residency_data_owned_motor_vehicles;
	document.getElementsByName("income_tax")[0].onclick = residency_data_income_tax;
}

function navigation_container()
{
	for (var i = 0; i < 8; ++i)
		document.getElementsByClassName("application_area")[i].style.height = String(window.innerHeight - 216)+"px";
	document.getElementById("page_body").style.height = String(window.innerHeight - 216)+"px";
}

function nav_box_fontsize()
{
	for (var k = 0; k < 8; ++k)
	{
		if (document.getElementsByClassName("application_area")[k].style.left == "0px")
		{
			if (window.innerWidth < 1120)
			{	
				if (document.getElementsByClassName("application_area")[k-1])
					document.getElementsByClassName("application_area")[k-1].style.left = String(window.innerWidth - 1808)+"px";
				if (document.getElementsByClassName("application_area")[k+1])
					document.getElementsByClassName("application_area")[k+1].style.right = String(window.innerWidth - 1808)+"px";
			}
			else
			{
				if (document.getElementsByClassName("application_area")[k-1])
					document.getElementsByClassName("application_area")[k-1].style.left = "-688px";
				if (document.getElementsByClassName("application_area")[k+1])
					document.getElementsByClassName("application_area")[k+1].style.right = "-688px";
			}
			break;
		}
	}	
	var nav_box = document.getElementsByClassName("nav_box");
	if (window.innerWidth < 480)
		for (var i = 0; i < 8; ++i)
		{
			nav_box[i].firstElementChild.style.fontSize = "10px";
			nav_box[i].lastElementChild.style.fontSize = "10px";
		}
	else if (window.innerWidth < 960)
		for (var i = 0; i < 8; ++i)
		{
			nav_box[i].firstElementChild.style.fontSize = "14px";
			nav_box[i].lastElementChild.style.fontSize = "14px";
		}
	else
		for (var i = 0; i < 8; ++i)
		{
			nav_box[i].firstElementChild.style.fontSize = "18px";
			nav_box[i].lastElementChild.style.fontSize = "18px";
		}	
}

var nav_box = document.getElementsByClassName("nav_box");
if (document.addEventListener)
	for (var index_0 = 0; index_0 < nav_box.length; ++index_0)
		nav_box[index_0].addEventListener("mouseover", nav_box_over, false);
else if (document.attachEvent)
	for (var index_0 = 0; index_0 < nav_box.length; ++index_0)
		nav_box[index_0].attachEvent("onmouseover", nav_box_over);
else
	for (var index_0 = 0; index_0 < nav_box.length; ++index_0)
		nav_box[index_0].onmouseover = nav_box_over;
function nav_box_click()
{
	if (this.style.backgroundColor != "rgb(105, 22, 48)")
	{
		for (var i = 0; i < nav_box.length; ++i)
		{
			if (nav_box[i].style.backgroundColor == "rgb(105, 22, 48)")
			{
				nav_box[i].style.backgroundColor = "#FBFBFB";
				nav_box[i].style.borderColor = "#B0B0B0";
				nav_box[i].lastElementChild.style.color = "#B0B0B0";
				nav_box[i].firstElementChild.style.backgroundColor = "#FBFBFB";
				nav_box[i].firstElementChild.style.color = "#B0B0B0";
				nav_box[i].firstElementChild.style.borderColor = "#B0B0B0";
				break;
			}			
		}
		this.style.backgroundColor = "#691630";
		this.style.borderColor = "#FBFBFB";
		this.lastElementChild.style.color = "#FBFBFB";
		this.firstElementChild.style.backgroundColor = "#691630";
		this.firstElementChild.style.color = "#FBFBFB";
		this.firstElementChild.style.borderColor = "#FBFBFB";
		var nav_box_num = parseInt(this.firstElementChild.innerHTML);
		var application_area = document.getElementsByClassName("application_area");
		for (var j = 0; j < 8; ++j)
		{
			var application_area_section = application_area[j].getElementsByClassName("application_area_section");
			var application_area_field = application_area[j].getElementsByClassName("application_area_field");
			var add_remove_field = application_area[j].getElementsByClassName("add_remove_field");
			if (j < nav_box_num - 2)
			{
				application_area[j].style.left = "auto";
				application_area[j].style.right = "100%";
			}
			else if (j == nav_box_num - 2)
			{
				if (window.innerWidth < 1120)
					application_area[j].style.left = String(window.innerWidth - 1808)+"px";
				else
					application_area[j].style.left = "-688px";
				application_area[j].style.right = "auto";
				application_area[j].style.overflowY = "hidden";
				for (var k = 0; k < application_area_section.length; ++k)
				{
					application_area_section[k].firstElementChild.style.borderColor = "#292929";
					application_area_section[k].firstElementChild.firstElementChild.style.color = "#292929";
					application_area_section[k].children[1].firstElementChild.style.color = "#292929";
				}
				for (var l = 0; l < application_area_field.length; ++l)
					application_area_field[l].children[1].disabled = true;
			}
			else if (j == nav_box_num - 1)
			{
				application_area[j].style.left = "0px";
				application_area[j].style.right = "0px";
				application_area[j].style.overflowY = "scroll";
				for (var k = 0; k < application_area_section.length; ++k)
				{
					application_area_section[k].firstElementChild.style.borderColor = "#691630";
					application_area_section[k].firstElementChild.firstElementChild.style.color = "#691630";
					application_area_section[k].children[1].firstElementChild.style.color = "#691630";
				}
				for (var l = 0; l < application_area_field.length; ++l)
					application_area_field[l].children[1].disabled = false;
				for (var m = 0; m < add_remove_field.length; ++m)
				{
					if (add_remove_field[m].firstElementChild.src == "file:///Q:/app/BUTTON_ADD_DISABLED.png")
					{
						add_remove_field[m].firstElementChild.src = "BUTTON_ADD_UP.png";
						if (add_remove_field[m].lastElementChild.innerHTML == "Add a Degree")
							if (document.addEventListener)
								add_remove_field[m].firstElementChild.addEventListener("click", enrollment_history_addadegree, false);
							else if (document.attachEvent)
								add_remove_field[m].firstElementChild.attachEvent("onclick", enrollment_history_addadegree);
							else
								add_remove_field[m].firstElementChild.onclick = enrollment_history_addadegree;
						else
							if (document.addEventListener)
								add_remove_field[m].firstElementChild.addEventListener("click", enrollment_history_addaschool, false);
							else if (document.attachEvent)
								add_remove_field[m].firstElementChild.attachEvent("onclick", enrollment_history_addaschool);
							else
								add_remove_field[m].firstElementChild.onclick = enrollment_history_addaschool;
					}
					else if (add_remove_field[m].firstElementChild.src == "file:///Q:/app/BUTTON_REMOVE_DISABLED.png")
					{
						add_remove_field[m].firstElementChild.src = "BUTTON_REMOVE_UP.png";
						if (add_remove_field[m].lastElementChild.innerHTML == "Remove Degree")
							if (document.addEventListener)
								add_remove_field[m].firstElementChild.addEventListener("click", enrollment_history_removedegree, false);
							else if (document.attachEvent)
								add_remove_field[m].firstElementChild.attachEvent("onclick", enrollment_history_removedegree);
							else
								add_remove_field[m].firstElementChild.onclick = enrollment_history_removedegree;
						else
							if (document.addEventListener)
								add_remove_field[m].firstElementChild.addEventListener("click", enrollment_history_removeschool, false);
							else if (document.attachEvent)
								add_remove_field[m].firstElementChild.attachEvent("onclick", enrollment_history_removeschool);
							else
								add_remove_field[m].firstElementChild.onclick = enrollment_history_removeschool;
					}
				}
			}
			else if (j == nav_box_num)
			{
				application_area[j].style.left = "auto";
				if (window.innerWidth < 1120)
					application_area[j].style.right = String(window.innerWidth - 1808)+"px";
				else
					application_area[j].style.right = "-688px";
				application_area[j].style.overflowY = "hidden";	
				for (var k = 0; k < application_area_section.length; ++k)
				{
					application_area_section[k].firstElementChild.style.borderColor = "#292929";
					application_area_section[k].firstElementChild.firstElementChild.style.color = "#292929";
					application_area_section[k].children[1].firstElementChild.style.color = "#292929";
				}
				for (var l = 0; l < application_area_field.length; ++l)
					application_area_field[l].children[1].disabled = true;
				for (var m = 0; m < add_remove_field.length; ++m)
				{
					if (add_remove_field[m].firstElementChild.src == "file:///Q:/app/BUTTON_ADD_UP.png")
					{
						add_remove_field[m].firstElementChild.src = "BUTTON_ADD_DISABLED.png";
						if (add_remove_field[m].lastElementChild.innerHTML == "Add a Degree")
							if (document.removeEventListener)
								add_remove_field[m].firstElementChild.removeEventListener("click", enrollment_history_addadegree, false);
							else if (document.detachEvent)
								add_remove_field[m].firstElementChild.detachEvent("onclick", enrollment_history_addadegree);
							else
								add_remove_field[m].firstElementChild.onclick = null;
						else
							if (document.removeEventListener)
								add_remove_field[m].firstElementChild.removeEventListener("click", enrollment_history_addaschool, false);
							else if (document.detachEvent)
								add_remove_field[m].firstElementChild.detachEvent("onclick", enrollment_history_addaschool);
							else
								add_remove_field[m].firstElementChild.onclick = null;
					}
					else if (add_remove_field[m].firstElementChild.src == "file:///Q:/app/BUTTON_REMOVE_UP.png")
					{
						add_remove_field[m].firstElementChild.src = "BUTTON_REMOVE_DISABLED.png";
						if (add_remove_field[m].lastElementChild.innerHTML == "Remove Degree")
							if (document.removeEventListener)
								add_remove_field[m].firstElementChild.removeEventListener("click", enrollment_history_removedegree, false);
							else if (document.detachEvent)
								add_remove_field[m].firstElementChild.detachEvent("onclick", enrollment_history_removedegree);
							else
								add_remove_field[m].firstElementChild.onclick = null;
						else
							if (document.removeEventListener)
								add_remove_field[m].firstElementChild.removeEventListener("click", enrollment_history_removeschool, false);
							else if (document.detachEvent)
								add_remove_field[m].firstElementChild.detachEvent("onclick", enrollment_history_removeschool);
							else
								add_remove_field[m].firstElementChild.onclick = null;
					}
				}
			}
			else
			{
				application_area[j].style.left = "100%";
				application_area[j].style.right = "auto";
			}
		}
	}
	if (document.removeEventListner)
		this.removeEventListener("click", nav_box_click, false);
	else if (document.detachEvent)
		this.detachEvent("onclick", nav_box_click);
	else
		this.onclick = null;
}
function nav_box_over()
{
	if (this.style.backgroundColor != "rgb(105, 22, 48)")
	{	
		this.style.borderColor = "#691630";
		this.getElementsByTagName("span")[0].style.color = "#691630";
		this.getElementsByTagName("div")[0].style.color = "#691630";
		this.getElementsByTagName("div")[0].style.borderColor = "#691630";
		if (document.addEventListener)
		{
			this.addEventListener("click", nav_box_click, false);
			this.addEventListener("mouseout", nav_box_out, false);
		}
		else if (document.attachEvent)
		{
			this.attachEvent("onclick", nav_box_click);
			this.attachEvent("onmouseout", nav_box_out);
		}
		else
		{
			this.onclick = nav_box_click;
			this.onmouseout = nav_box_out;
		}
	}
}
function nav_box_out()
{
	if (this.style.backgroundColor != "rgb(105, 22, 48)")
	{
		this.style.borderColor = "#B0B0B0";
		this.lastElementChild.style.color = "#B0B0B0";
		this.firstElementChild.style.color = "#B0B0B0";
		this.firstElementChild.style.borderColor = "#B0B0B0";
	}
	if (document.removeEventListener)
	{
		this.removeEventListener("click", nav_box_click, false);
		this.removeEventListener("mouseout", nav_box_out, false);
	}
	else if (document.detachEvent)
	{
		this.detachEvent("onclick", nav_box_click);
		this.detachEvent("onmouseout", nav_box_out);
	}
	else
	{
		this.onclick = nav_box_click;
		this.onmouseout = nav_box_out;
	}
}

function focus()
{
	this.style.borderColor = "#691630";
	this.style.boxShadow = "0px 0px 4px #691630";
	if (document.addEventListener)
		this.addEventListener("blur", blur, false);
	else if (document.attachEvent)
		this.attachEvent("onblur", blur);
	else
		this.onblur = blur;
	if (this.tagName == "INPUT" || this.tagName == "TEXTAREA")
	{
		if (this.tagName == "INPUT")
		{
			var t = this.previousElementSibling.innerHTML;
			if (t == "First Name" || t == "Preferred First Name" || t == "Middle Name" || t == "Last Name" || t == "Employer" || t == "Contact Name")
				if (document.addEventListener)
				{
					this.addEventListener("keydown", name, false);
					this.addEventListener("keypress", name, false);
				}
				else if (document.attachEvent)
				{
					this.attachEvent("onkeydown", name);
					this.attachEvent("onkeypress", name);
				}
				else
				{
					this.onkeydown = name;
					this.onkeypress = name;
				}
			else if (t == "Date of Birth" || t == "Issue Date" || t == "Expiration Date" || t == "Attendance Date: From" || t == "Attendance Date: To" || t == "Date Issued" || t == "Original Date of Issue" || t == "Most Recent Date of Issue" || t == "Original Date of Registration" || t == "Most Recent Date of Registration")
			{
				if (document.addEventListener)
				{
					this.addEventListener("keydown", date, false);
					this.addEventListener("keypress", date, false);
				}
				else if (document.attachEvent)
				{
					this.attachEvent("onkeydown", date);
					this.attachEvent("onkeypress", date);
				}
				else
				{
					this.onkeydown = date;
					this.onkeypress = date;
				}
				this.placeholder = "MM/DD/YYYY";
			}
			else if (t == "SSN" || t == "Verify SSN")
			{
				if (document.addEventListener)
				{
					this.addEventListener("keydown", social, false);
					this.addEventListener("keypress", social, false);
				}
				else if (document.attachEvent)
				{
					this.attachEvent("onkeydown", social);
					this.attachEvent("onkeypress", social);
				}
				else
				{
					this.onkeydown = social;
					this.onkeypress = social;
				}
				this.placeholder = "#########";
			}
			else if (t == "Telephone No.")
			{
				if (document.addEventListener)
				{
					this.addEventListener("keydown", phone, false);
					this.addEventListener("keypress", phone, false);
				}
				else if (document.attachEvent)
				{
					this.attachEvent("onkeydown", phone);
					this.attachEvent("onkeypress", phone);
				}
				else
				{
					this.onkeydown = phone;
					this.onkeypress = phone;
				}
				this.placeholder = "(###) ###-####";
			}
		}
	}
}
function blur()
{
	this.style.borderColor = "#B0B0B0";
	this.style.boxShadow = "none";
	if (document.removeEventListener)
		this.removeEventListener("blur", blur, false);
	else if (document.detachEvent)
		this.detachEvent("onblur", blur);
	else
		this.onblur = null;
	if (this.tagName == "INPUT" || this.tagName == "TEXTAREA")
	{
		if (this.tagName == "INPUT")
		{
			var t = this.previousElementSibling.innerHTML;
			if (t == "First Name" || t == "Preferred First Name" || t == "Middle Name" || t == "Last Name" || t == "Employer" || t == "Contact Name")
				if (document.removeEventListener)
				{
					this.removeEventListener("keydown", name, false);
					this.removeEventListener("keypress", name, false);
				}
				else if (document.detachEvent)
				{
					this.detachEvent("onkeydown", name);
					this.detachEvent("onkeypress", name);
				}
				else
				{
					this.onkeydown = null;
					this.onkeypress = null;
				}
			else if (t == "Date of Birth" || t == "Issue Date" || t == "Expiration Date" || t == "Attendance Date: From" || t == "Attendance Date: To" || t == "Date Issued" || t == "Original Date of Issue" || t == "Most Recent Date of Issue" || t == "Original Date of Registration" || t == "Most Recent Date of Registration")
			{
				if (document.removeEventListener)
				{
					this.removeEventListener("keydown", date, false);
					this.removeEventListener("keypress", date, false);
				}
				else if (document.detachEvent)
				{
					this.detachEvent("onkeydown", date);
					this.detachEvent("onkeypress", date);
				}
				else
				{
					this.onkeydown = null;
					this.onkeypress = null;
				}
				this.placeholder = "";
			}
			else if (t == "SSN" || t == "Verify SSN")
			{
				if (document.removeEventListener)
				{
					this.removeEventListener("keydown", social, false);
					this.removeEventListener("keypress", social, false);
				}
				else if (document.detachEvent)
				{
					this.detachEvent("onkeydown", social);
					this.detachEvent("onkeypress", social);
				}
				else
				{
					this.onkeydown = null;
					this.onkeypress = null;
				}
				this.placeholder = "";
			}
			else if (t == "Telephone No.")
			{
				if (document.removeEventListener)
				{
					this.removeEventListener("keydown", phone, false);
					this.removeEventListener("keypress", phone, false);
				}
				else if (document.detachEvent)
				{
					this.detachEvent("onkeydown", phone);
					this.detachEvent("onkeypress", phone);
				}
				else
				{
					this.onkeydown = null;
					this.onkeypress = null;
				}
				this.placeholder = "";
			}
		}
	}
}
var flag = false;
var len;
function name(event)
{
	if (event.type == "keydown")
	{
		var val = event.keyCode;
		if (val == 109 || val == 173 || val == 222);
		else if (val == 8 || val == 9 || val == 12 || (val > 31 && val < 41) || val == 46 || (val > 64 && val < 91))
			flag = true;
		else event.preventDefault();
	}
	else
	{
		var val = event.which;
		if (flag == true)
		{
			len = this.value.length;
			if (len == 0 && val > 96 && val < 123)
				setTimeout(upper, 5, this);
		}
		else
		{
			if (val == 39 || val == 45);
			else event.preventDefault();
		}
		flag = false;
	}
}
function upper(obj)
{
	var obj_val = obj.value.charCodeAt(0);
	obj.value = null;
	obj.value += String.fromCharCode(obj_val - 32);
}
function date(event)
{
	if (event.type == "keydown")
	{
		var val = event.keyCode;
		if ((val > 47 && val < 58) || (val > 95 && val < 106));
		else if (val == 8 || val == 9 || val == 12 || (val > 32 && val < 41) || val == 46)
			flag = true;
		else event.preventDefault();
	}
	else
	{
		var val = event.which;
		if (flag == true);
		else
		{
			if ((val > 47 && val < 58) || (val > 95 && val < 106))
			{
				len = this.value.length;
				if (len == 0)
				{
					if (!(val == 48 || val == 49 || val == 96 || val == 97))
						event.preventDefault();
				}
				else if (len == 1)
				{
					if (this.value[0] == '0')
					{
						if (val == 48 || val == 96)
							event.preventDefault();
					}
					else
					{
						if (!(val == 48 || val == 49 || val == 50 || val == 96 || val == 97 || val == 98))
							event.preventDefault();
					}
				}
				else if (len == 2 || len == 3)
				{
					if (!(val == 48 || val == 49 || val == 50 || val == 51 || val == 96 || val == 97 || val == 98 || val == 99))
						event.preventDefault();
				}
				else if (len == 4)
				{
					if (this.value[3] == '0')
					{
						if (val == 48 || val == 96)
							event.preventDefault();
					}
					else if (this.value[3] == '3')
					{
						if (!(val == 48 || val == 49 || val == 96 || val == 97))
							event.preventDefault();						
					}
				}
				else if (len == 5 || len == 6)
				{
					if (!(val == 49 || val == 50 || val == 97 || val == 98))
						event.preventDefault();
				}
				else if (len == 7)
				{
					if (this.value[6] == '1')
					{
						if (!(val == 57 || val == 105))
							event.preventDefault();
					}
					else
					{
						if (!(val == 48 || val == 96))
							event.preventDefault();
					}
				}
				function date_append(obj)
				{
					len = obj.value.length;
					if (len == 2 || len == 5)
						obj.value += "/";
					else if ((len == 3 || len == 6) && (obj.value[len-1] != "/"))
					{
						var str = obj.value.split("");
						str.push(str[len-1]);
						str[len-1] = "/";
						obj.value = str.join("");
					}
				}
				setTimeout(date_append, 5, this);  //compatible? look at params
			}
			else event.preventDefault();
		}		
		flag = false;
	}	
}
function social(event)
{
	if (event.type == "keydown")
	{
		var val = event.keyCode;
		if ((val > 47 && val < 58) || (val > 95 && val < 106));
		else if (val == 8 || val == 9 || val == 12 || (val > 32 && val < 41) || val == 46)
			flag = true;
		else event.preventDefault();
	}
	else
	{
		var val = event.which;
		if (flag == true);
		else
		{
			if ((val > 47 && val < 58) || (val > 95 && val < 106))
			{
				function verify_social(obj)
				{
					var ssn = document.getElementsByName("ssn")[0];
					if (obj.value != ssn.value)
					{
						obj.style.borderColor = "#FF0000";
						obj.style.boxShadow = "0px 0px 4px #FF0000";
						ssn.style.borderColor = "#FF0000";
						ssn.style.boxShadow = "0px 0px 4px #FF0000";
						obj.removeEventListener("blur", blur, false);
					}
				}
				len = this.value.length;
				if (this.name != "ssn" && document.getElementsByName("ssn")[0].value != "" && len == 8)
					setTimeout(verify_social, 5, this);
			}
			else event.preventDefault();
		}		
		flag = false;
	}
}
function phone(event)
{
	if (event.type == "keydown")
	{
		var val = event.keyCode;
		if ((val > 47 && val < 58) || (val > 95 && val < 106));
		else if (val == 8 || val == 9 || val == 12 || (val > 32 && val < 41) || val == 46)
			flag = true;
		else event.preventDefault();
	}
	else
	{
		var val = event.which;
		if (flag == true);
		else
		{
			if ((val > 47 && val < 58) || (val > 95 && val < 106))
			{
				len = this.value.length;
				function phone_append(obj)
				{
					len = obj.value.length;
					if (len == 1 && obj.value[len-1] != "(")
					{
						var str = obj.value.split("");
						str.push(str[len-1]);
						str[len-1] = "(";
						obj.value = str.join("");
					}
					else if (len == 4)
						obj.value += ") ";
					else if (len == 5 && obj.value[len-1] != ")")
					{
						var str = obj.value.split("");
						str.push(" ");
						str.push(str[len-1]);
						str[len-1] = ")";
						obj.value = str.join("");
					}
					else if (len == 6 && obj.value[len-1] != " ")
					{
						var str = obj.value.split("");
						str.push(str[len-1]);
						str[len-1] = " ";
						obj.value = str.join("");
					}
					else if (len == 9)
						obj.value += "-";
					else if (len == 10 && obj.value[len-1] != "-")
					{
						var str = obj.value.split("");
						str.push(str[len-1]);
						str[len-1] = "-";
						obj.value = str.join("");
					}
				}
				setTimeout(phone_append, 5, this);  //compatible? look at params
			}
			else event.preventDefault();
		}		
		flag = false;
	}
}
//function email(event){}
//function username(event){}

var select = document.getElementsByTagName("select").length;
var input = document.getElementsByTagName("input").length;
var textarea = document.getElementsByTagName("textarea").length;
if (document.addEventListener)
{
	for (var sel = 0; sel < select; ++sel)
		document.getElementsByTagName("select")[sel].addEventListener("focus", focus, false);
	for (var inp = 0; inp < input; ++inp)
		document.getElementsByTagName("input")[inp].addEventListener("focus", focus, false);
	for (var tex = 0; tex < textarea; ++tex)
		document.getElementsByTagName("textarea")[tex].addEventListener("focus", focus, false);
}
else if (document.attachEvent)
{
	for (var sel = 0; sel < select; ++sel)
		document.getElementsByTagName("select")[sel].attachEvent("onfocus", focus);
	for (var inp = 0; inp < input; ++inp)
		document.getElementsByTagName("input")[inp].attachEvent("onfocus", focus);
	for (var tex = 0; tex < textarea; ++tex)
		document.getElementsByTagName("textarea")[tex].attachEvent("onfocus", focus);
}
else
{
	for (var sel = 0; sel < select; ++sel)
		document.getElementsByTagName("select")[sel].onfocus = focus;
	for (var inp = 0; inp < input; ++inp)
		document.getElementsByTagName("input")[inp].onfocus = focus;
	for (var tex = 0; tex < textarea; ++tex)
		document.getElementsByTagName("textarea")[tex].onfocus = focus;
}
function country_stateprovince()
{
	if (this.children[1].selected == true || this.children[32].selected == true)
	{
		if (this.name == "country")
		{
			document.getElementsByName("state_province")[0].parentNode.style.display = "block";
			document.getElementsByName("zip_code")[0].parentNode.firstElementChild.innerHTML = "ZIP Code";
		}
		else
		{
			document.getElementsByName("contact_address_state_province")[0].parentNode.style.display = "block";
			document.getElementsByName("contact_address_zip_code")[0].parentNode.firstElementChild.innerHTML = "ZIP Code";
		}
	}
	else
	{
		if (this.name == "country")
		{
			document.getElementsByName("state_province")[0].parentNode.style.display = "none";
			document.getElementsByName("state_province")[0].firstElementChild.selected = true;
			document.getElementsByName("zip_code")[0].parentNode.firstElementChild.innerHTML = "Postal Code";
		}
		else
		{
			document.getElementsByName("contact_address_state_province")[0].parentNode.style.display = "none";
			document.getElementsByName("contact_address_state_province")[0].firstElementChild.selected = true;
			document.getElementsByName("contact_address_zip_code")[0].parentNode.firstElementChild.innerHTML = "Postal Code";
		}
	}
}
function personal_info_usacitizenship() //clean up
{
	var index = Array.prototype.indexOf.call(document.getElementsByClassName("application_area_field"), this.parentNode);	
	if (this.children[2].selected == true)
	{
		for (var i = 1; i <= 6; ++i)
			document.getElementsByClassName("application_area_field")[index+i].style.display = "block";
		document.getElementsByClassName("application_area")[0].scrollTop = document.getElementsByClassName("application_area_field")[index].offsetTop;
	}
	else
		for (var i = 1; i <= 6; ++i)
		{
			document.getElementsByClassName("application_area_field")[index+i].style.display = "none";
			document.getElementsByClassName("application_area_field")[index+i].children[1].value = "";
		}
}

function application_info_explanation()
{
	if (document.getElementsByName("first_time_grad")[0].children[2].selected == true || document.getElementsByName("prev_app_grad")[0].children[2].selected == true || document.getElementsByName("criminal")[0].children[2].selected == true)
	{
		document.getElementsByClassName("application_area")[3].getElementsByClassName("application_area_field")[8].style.display = "block";
		document.getElementsByClassName("application_area")[3].scrollTop = document.getElementsByClassName("application_area")[3].getElementsByClassName("application_area_field")[8].offsetTop;
	}
	else
		document.getElementsByClassName("application_area")[3].getElementsByClassName("application_area_field")[8].style.display = "none";
}

var add_remove_field = document.getElementsByClassName("add_remove_field");
var school = 0;
var degree = 0;
if (document.addEventListener)
{
	for (var index_1 = 0; index_1 < add_remove_field.length; ++index_1)
	{
		add_remove_field[index_1].firstElementChild.addEventListener("mousedown", enrollment_history_buttondown, false);
		if (add_remove_field[index_1].children[1].innerHTML == "Add a School")
			add_remove_field[index_1].firstElementChild.addEventListener("click", enrollment_history_addaschool, false);
		else if (add_remove_field[index_1].children[1].innerHTML == "Remove School")
			add_remove_field[index_1].firstElementChild.addEventListener("click", enrollment_history_removeschool, false);
		else if (add_remove_field[index_1].children[1].innerHTML == "Add a Degree")
			add_remove_field[index_1].firstElementChild.addEventListener("click", enrollment_history_addadegree, false);
		else
			add_remove_field[index_1].firstElementChild.addEventListener("click", enrollment_history_removedegree, false);
	}
}
else if (document.attachEvent)
{
	for (var index_1 = 0; index_1 < add_remove_field.length; ++index_1)
	{
		add_remove_field[index_1].firstElementChild.attachEvent("onmousedown", enrollment_history_buttondown);
		if (add_remove_field[index_1].children[1].innerHTML == "Add a School")
			add_remove_field[index_1].firstElementChild.attachEvent("onclick", enrollment_history_addaschool);
		else if (add_remove_field[index_1].children[1].innerHTML == "Remove School")
			add_remove_field[index_1].firstElementChild.attachEvent("click", enrollment_history_removeschool);
		else if (add_remove_field[index_1].children[1].innerHTML == "Add a Degree")
			add_remove_field[index_1].firstElementChild.attachEvent("onclick", enrollment_history_addadegree);
		else
			add_remove_field[index_1].firstElementChild.attachEvent("onclick", enrollment_history_removedegree);
	}	
}
else
{
	for (var index_1 = 0; index_1 < add_remove_field.length; ++index_1)
	{
		add_remove_field[index_1].firstElementChild.onmousedown = enrollment_history_buttondown;
		if (add_remove_field[index_1].children[1].innerHTML == "Add a School")
			add_remove_field[index_1].firstElementChild.onclick = enrollment_history_addaschool;
		else if (add_remove_field[index_1].children[1].innerHTML == "Remove School")
			add_remove_field[index_1].firstElementChild.onclick = enrollment_history_removeschool;
		else if (add_remove_field[index_1].children[1].innerHTML == "Add a Degree")
			add_remove_field[index_1].firstElementChild.onclick = enrollment_history_addadegree;
		else
			add_remove_field[index_1].firstElementChild.onclick = enrollment_history_removedegree;
	}
}
function enrollment_history_buttondown()
{
	if (arguments[0].button === 0) //checkout arguments for more info, 0 == left click
	{
		if (this.src == "file:///Q:/app/BUTTON_ADD_UP.png")
			this.src = "BUTTON_ADD_DOWN.png";
		else if (this.src == "file:///Q:/app/BUTTON_REMOVE_UP.png")
			this.src = "BUTTON_REMOVE_DOWN.png";
	}
	if (document.addEventListener)
	{
		this.addEventListener("mouseup", enrollment_history_buttonup, false);
		this.addEventListener("mouseout", enrollment_history_buttonup, false);
	}
	else if (document.attachEvent)
	{
		this.attachEvent("onmouseup", enrollment_history_buttonup);
		this.attachEvent("onmouseout", enrollment_history_buttonup);		
	}
	else
	{
		this.onmouseup = enrollment_history_buttonup;
		this.onmouseout = enrollment_history_buttonup;		
	}
}
function enrollment_history_buttonup()
{
	if (this.src == "file:///Q:/app/BUTTON_ADD_DOWN.png")
		this.src = "BUTTON_ADD_UP.png";
	else if (this.src == "file:///Q:/app/BUTTON_REMOVE_DOWN.png")
		this.src = "BUTTON_REMOVE_UP.png";
	if (document.removeEventListener)
	{
		this.removeEventListener("mouseup", enrollment_history_buttonup, false);
		this.removeEventListener("mouseout", enrollment_history_buttonup, false);
	}
	else if (document.detachEvent)
	{
		this.detachEvent("onmouseup", enrollment_history_buttonup);
		this.detachEvent("onmouseout", enrollment_history_buttonup);
	}
	else
	{
		this.onmouseup = null;
		this.onmouseout = null;
	}
}
function enrollment_history_addaschool() //fix naming scheme
{
	var application_area = this.parentNode.parentNode;	
		var remove_school = document.createElement("DIV");
		remove_school.className = "add_remove_field";
			var remove_school_TextNode = document.createTextNode("");
		remove_school.appendChild(remove_school_TextNode);
			var remove_school_IMG = document.createElement("IMG");
			remove_school_IMG.src = "BUTTON_REMOVE_UP.png";
			if (document.addEventListener)
			{
				remove_school_IMG.addEventListener("mousedown", enrollment_history_buttondown, false);
				remove_school_IMG.addEventListener("click", enrollment_history_removeschool, false);
			}
			else if (document.attachEvent)
			{
				remove_school_IMG.attachEvent("onmousedown", enrollment_history_buttondown);
				remove_school_IMG.attachEvent("onclick", enrollment_history_removeschool);
			}
			else
			{
				remove_school_IMG.onmousedown = enrollment_history_buttondown;
				remove_school_IMG.onclick = enrollment_history_removeschool;
			}
				var remove_school_IMG_TextNode = document.createTextNode("");
			remove_school_IMG.appendChild(remove_school_IMG_TextNode);
		remove_school.appendChild(remove_school_IMG);
			var remove_school_SPAN = document.createElement("SPAN");
				var remove_school_SPAN_TextNode = document.createTextNode("Remove School");
			remove_school_SPAN.appendChild(remove_school_SPAN_TextNode);
		remove_school.appendChild(remove_school_SPAN);
	application_area.insertBefore(remove_school, this.parentNode);		
		var school_code = document.createElement("DIV");
		school_code.className = "application_area_field";
			var school_code_TextNode = document.createTextNode("");
		school_code.appendChild(school_code_TextNode);
			var school_code_SPAN = document.createElement("SPAN");
				var school_code_SPAN_TextNode = document.createTextNode("School Code");
			school_code_SPAN.appendChild(school_code_SPAN_TextNode);
		school_code.appendChild(school_code_SPAN);
			var school_code_INPUT = document.createElement("INPUT");
			school_code_INPUT.type = "text";
			school_code_INPUT.name = "school_0_school_code";
			school_code_INPUT.className = "input_0";
			school_code_INPUT.maxLength = "6";
			if (document.addEventListener)		
				school_code_INPUT.addEventListener("focus", focus, false);
			else if (document.attachEvent)
				school_code_INPUT.attachEvent("onfocus", focus);
			else
				school_code_INPUT.onfocus = focus;
				var school_code_INPUT_TextNode = document.createTextNode("");
			school_code_INPUT.appendChild(school_code_INPUT_TextNode);
		school_code.appendChild(school_code_INPUT);
	application_area.insertBefore(school_code, this.parentNode);
		var attendance_date_from = document.createElement("DIV");
		attendance_date_from.className = "application_area_field";
			var attendance_date_from_TextNode = document.createTextNode("");
		attendance_date_from.appendChild(attendance_date_from_TextNode);
			var attendance_date_from_SPAN = document.createElement("SPAN");
				var attendance_date_from_SPAN_TextNode = document.createTextNode("Attendance Date: From");
			attendance_date_from_SPAN.appendChild(attendance_date_from_SPAN_TextNode);
		attendance_date_from.appendChild(attendance_date_from_SPAN);
			var attendance_date_from_INPUT = document.createElement("INPUT");
			attendance_date_from_INPUT.type = "text";
			attendance_date_from_INPUT.name = "school_0_attendance_date_from";
			attendance_date_from_INPUT.className = "input_1";
			attendance_date_from_INPUT.maxLength = "10";
			if (document.addEventListener)
				attendance_date_from_INPUT.addEventListener("focus", focus, false);
			else if (document.attachEvent)
				attendance_date_from_INPUT.attachEvent("onfocus", focus);
			else
				attendance_date_from_INPUT.onfocus = focus;
				var attendance_date_from_INPUT_TextNode = document.createTextNode("");
			attendance_date_from_INPUT.appendChild(attendance_date_from_INPUT_TextNode);
		attendance_date_from.appendChild(attendance_date_from_INPUT);
	application_area.insertBefore(attendance_date_from, this.parentNode);
		var attendance_date_to = document.createElement("DIV");
		attendance_date_to.className = "application_area_field";
			var attendance_date_to_TextNode = document.createTextNode("");
		attendance_date_to.appendChild(attendance_date_to_TextNode);
			var attendance_date_to_SPAN = document.createElement("SPAN");
				var attendance_date_to_SPAN_TextNode = document.createTextNode("Attendance Date: To");
			attendance_date_to_SPAN.appendChild(attendance_date_to_SPAN_TextNode);
		attendance_date_to.appendChild(attendance_date_to_SPAN);
			var attendance_date_to_INPUT = document.createElement("INPUT");
			attendance_date_to_INPUT.type = "text";
			attendance_date_to_INPUT.name = "school_0_attendance_date_to";
			attendance_date_to_INPUT.className = "input_1";
			attendance_date_to_INPUT.maxLength = "10";
			if (document.addEventListener)
				attendance_date_to_INPUT.addEventListener("focus", focus, false);
			else if (document.attachEvent)
				attendance_date_to_INPUT.attachEvent("onfocus", focus);
			else
				attendance_date_to_INPUT.onfocus = focus;
				var attendance_date_to_INPUT_TextNode = document.createTextNode("");
			attendance_date_to_INPUT.appendChild(attendance_date_to_INPUT_TextNode);
		attendance_date_to.appendChild(attendance_date_to_INPUT);
	application_area.insertBefore(attendance_date_to, this.parentNode);
		var degree = document.createElement("DIV");
		degree.className = "application_area_field";
			var degree_TextNode = document.createTextNode("");
		degree.appendChild(degree_TextNode);
			var degree_SPAN = document.createElement("SPAN");
				var degree_SPAN_TextNode = document.createTextNode("Degree");
			degree_SPAN.appendChild(degree_SPAN_TextNode);
		degree.appendChild(degree_SPAN);
			var degree_SELECT = document.createElement("SELECT");
			degree_SELECT.name = "school_0_degree_0";
			degree_SELECT.className = "select_3";
			if (document.addEventListener)
				degree_SELECT.addEventListener("focus", focus, false);
			else if (document.attachEvent)
				degree_SELECT.attachEvent("onfocus", focus);
			else
				degree_SELECT.onfocus = focus;
				var degree_SELECT_TextNode = document.createTextNode("");
			degree_SELECT.appendChild(degree_SELECT_TextNode);
				var degree_SELECT_OPTION_0 = document.createElement("OPTION");
				degree_SELECT_OPTION_0.disabled = true;
				degree_SELECT_OPTION_0.selected = true;
					var degree_SELECT_OPTION_0_TextNode = document.createTextNode("");
				degree_SELECT_OPTION_0.appendChild(degree_SELECT_OPTION_0_TextNode);
			degree_SELECT.appendChild(degree_SELECT_OPTION_0);
				var degree_SELECT_OPTION_1 = document.createElement("OPTION");
				degree_SELECT_OPTION_1.value = "Computer Engineering";
					var degree_SELECT_OPTION_1_TextNode = document.createTextNode("Computer Engineering");
				degree_SELECT_OPTION_1.appendChild(degree_SELECT_OPTION_1_TextNode);
			degree_SELECT.appendChild(degree_SELECT_OPTION_1);
				var degree_SELECT_OPTION_2 = document.createElement("OPTION");
				degree_SELECT_OPTION_2.value = "Computer Science";
					var degree_SELECT_OPTION_2_TextNode = document.createTextNode("Computer Science");
				degree_SELECT_OPTION_2.appendChild(degree_SELECT_OPTION_2_TextNode);
			degree_SELECT.appendChild(degree_SELECT_OPTION_2);
				var degree_SELECT_OPTION_3 = document.createElement("OPTION");
				degree_SELECT_OPTION_3.value = "Mathematics";
					var degree_SELECT_OPTION_3_TextNode = document.createTextNode("Mathematics");
				degree_SELECT_OPTION_3.appendChild(degree_SELECT_OPTION_3_TextNode);
			degree_SELECT.appendChild(degree_SELECT_OPTION_3);
		degree.appendChild(degree_SELECT);
	application_area.insertBefore(degree, this.parentNode);
		var add_a_degree = document.createElement("DIV");
		add_a_degree.className = "add_remove_field";
			var add_a_degree_TextNode = document.createTextNode("");
		add_a_degree.appendChild(add_a_degree_TextNode);
			var add_a_degree_IMG = document.createElement("IMG");
			add_a_degree_IMG.src = "BUTTON_ADD_UP.png";
			if (document.addEventListener)
			{
				add_a_degree_IMG.addEventListener("mousedown", enrollment_history_buttondown, false);
				add_a_degree_IMG.addEventListener("click", enrollment_history_addadegree, false);
			}
			else if (document.attachEvent)
			{
				add_a_degree_IMG.attachEvent("onmousedown", enrollment_history_buttondown);
				add_a_degree_IMG.attachEvent("onclick", enrollment_history_addadegree);
			}
			else
			{
				add_a_degree_IMG.onmousedown = enrollment_history_buttondown;
				add_a_degree_IMG.onclick = enrollment_history_addadegree;
			}
				var add_a_degree_IMG_TextNode = document.createTextNode("");
			add_a_degree_IMG.appendChild(add_a_degree_IMG_TextNode);
		add_a_degree.appendChild(add_a_degree_IMG);
			var add_a_degree_SPAN = document.createElement("SPAN");
				var add_a_degree_SPAN_TextNode = document.createTextNode("Add a Degree");
			add_a_degree_SPAN.appendChild(add_a_degree_SPAN_TextNode);
		add_a_degree.appendChild(add_a_degree_SPAN);
	application_area.insertBefore(add_a_degree, this.parentNode);
		var total_credits_attempted = document.createElement("DIV");
		total_credits_attempted.className = "application_area_field";
			var total_credits_attempted_TextNode = document.createTextNode("");
		total_credits_attempted.appendChild(total_credits_attempted_TextNode);
			var total_credits_attempted_SPAN = document.createElement("SPAN");
				var total_credits_attempted_SPAN_TextNode = document.createTextNode("Total Credits Attempted");
			total_credits_attempted_SPAN.appendChild(total_credits_attempted_SPAN_TextNode);
		total_credits_attempted.appendChild(total_credits_attempted_SPAN);
			var total_credits_attempted_INPUT = document.createElement("INPUT");
			total_credits_attempted_INPUT.type = "text";
			total_credits_attempted_INPUT.name = "school_0_total_credits_attempted";
			total_credits_attempted_INPUT.className = "input_0";
			total_credits_attempted_INPUT.maxLength = "3";
			if (document.addEventListener)
				total_credits_attempted_INPUT.addEventListener("focus", focus, false);
			else if (document.attachEvent)
				total_credits_attempted_INPUT.attachEvent("onfocus", focus);
			else
				total_credits_attempted_INPUT.onfocus = focus;
				var total_credits_attempted_INPUT_TextNode = document.createTextNode("");
			total_credits_attempted_INPUT.appendChild(total_credits_attempted_INPUT_TextNode);
		total_credits_attempted.appendChild(total_credits_attempted_INPUT);
	application_area.insertBefore(total_credits_attempted, this.parentNode);
		var total_credits_completed = document.createElement("DIV");
		total_credits_completed.className = "application_area_field";
			var total_credits_completed_TextNode = document.createTextNode("");
		total_credits_completed.appendChild(total_credits_completed_TextNode);
			var total_credits_completed_SPAN = document.createElement("SPAN");
				var total_credits_completed_SPAN_TextNode = document.createTextNode("Total Credits Completed");
			total_credits_completed_SPAN.appendChild(total_credits_completed_SPAN_TextNode);
		total_credits_completed.appendChild(total_credits_completed_SPAN);
			var total_credits_completed_INPUT = document.createElement("INPUT");
			total_credits_completed_INPUT.type = "text";
			total_credits_completed_INPUT.name = "school_0_total_credits_completed";
			total_credits_completed_INPUT.className = "input_0";
			total_credits_completed_INPUT.maxLength = "3";
			if (document.addEventListener)
				total_credits_completed_INPUT.addEventListener("focus", focus, false);
			else if (document.attachEvent)
				total_credits_completed_INPUT.attachEvent("onfocus", focus);
			else
				total_credits_completed_INPUT.onfocus = focus;
				var total_credits_completed_INPUT_TextNode = document.createTextNode("");
			total_credits_completed_INPUT.appendChild(total_credits_completed_INPUT_TextNode);
		total_credits_completed.appendChild(total_credits_completed_INPUT);
	application_area.insertBefore(total_credits_completed, this.parentNode);
	document.getElementsByClassName("application_area")[4].scrollTop = this.offsetTop;
}
function enrollment_history_removeschool()
{
	while (this.parentNode.nextElementSibling.lastElementChild.innerHTML != "Remove School" && this.parentNode.nextElementSibling.lastElementChild.innerHTML != "Add a School")
		this.parentNode.parentNode.removeChild(this.parentNode.nextElementSibling);
	this.parentNode.parentNode.removeChild(this.parentNode);
}
function enrollment_history_addadegree() //fix naming scheme
{
	var add_a_degree = this.parentNode;
	var remove_degree = add_a_degree.cloneNode(true);
	remove_degree.firstElementChild.src = "BUTTON_REMOVE_UP.png";
	if (document.addEventListener)
	{
		remove_degree.firstElementChild.addEventListener("mousedown", enrollment_history_buttondown, false);
		remove_degree.firstElementChild.addEventListener("click", enrollment_history_removedegree, false);
	}
	else if (document.attachEvent)
	{
		remove_degree.firstElementChild.attachEvent("onmousedown", enrollment_history_buttondown);
		remove_degree.firstElementChild.attachEvent("onclick", enrollment_history_removedegree);
	}
	else
	{
		remove_degree.firstElementChild.onmousedown = enrollment_history_buttondown;
		remove_degree.firstElementChild.onclick = enrollment_history_removedegree;
	}
	remove_degree.children[1].innerHTML = "Remove Degree";
	var degree = add_a_degree.previousElementSibling.cloneNode(true);
	degree.lastElementChild.firstElementChild.selected = true;
	if (document.addEventListener)
		degree.lastElementChild.addEventListener("focus", focus, false);
	else if (document.attachEvent)
		degree.lastElementChild.attachEvent("onfocus", focus);
	else
		degree.lastElementChild.onfocus = focus;
	add_a_degree.parentNode.insertBefore(remove_degree, add_a_degree);
	add_a_degree.parentNode.insertBefore(degree, add_a_degree);
	document.getElementsByClassName("application_area")[4].scrollTop = this.offsetTop;
}
function enrollment_history_removedegree()
{
	this.parentNode.parentNode.removeChild(this.parentNode.nextElementSibling);
	this.parentNode.parentNode.removeChild(this.parentNode);
}

function residency_data_resident()
{
	if (this.children[2].selected == true)
	{
		document.getElementsByName("county")[0].parentNode.style.display = "block";
		document.getElementsByName("primary_reason")[0].parentNode.style.display = "block";
	}
	else
	{
		document.getElementsByName("county")[0].parentNode.style.display = "none";
		document.getElementsByName("county")[0].firstElementChild.selected = true;
		document.getElementsByName("primary_reason")[0].parentNode.style.display = "none";
		document.getElementsByName("primary_reason")[0].firstElementChild.selected = true;
	}
}
function residency_data_financial_aid()
{
	if (this.children[2].selected == true)
		document.getElementsByName("which_state")[0].parentNode.style.display = "block";
	else
	{
		document.getElementsByName("which_state")[0].parentNode.style.display = "none";
		document.getElementsByName("which_state")[0].firstElementChild.selected = true;
	}
}
function residency_data_registered_to_vote()
{
	if (this.children[2].selected == true)
	{
		document.getElementsByName("which_state_registered")[0].parentNode.style.display = "block";
		document.getElementsByName("date_issued")[0].parentNode.style.display = "block";
	}
	else
	{
		document.getElementsByName("which_state_registered")[0].parentNode.style.display = "none";
		document.getElementsByName("which_state_registered")[0].firstElementChild.selected = true;
		document.getElementsByName("date_issued")[0].parentNode.style.display = "none";
		document.getElementsByName("date_issued")[0].value = "";
	}
}
function residency_data_drivers_license()
{
	if (this.children[2].selected == true)
	{
		document.getElementsByName("license_which_state")[0].parentNode.style.display = "block";
		document.getElementsByName("original_date_of_issue")[0].parentNode.style.display = "block";
		document.getElementsByName("recent_date_of_issue")[0].parentNode.style.display = "block";
	}
	else
	{
		document.getElementsByName("license_which_state")[0].parentNode.style.display = "none";
		document.getElementsByName("license_which_state")[0].firstElementChild.selected = true;
		document.getElementsByName("original_date_of_issue")[0].parentNode.style.display = "none";
		document.getElementsByName("original_date_of_issue")[0].value = "";
		document.getElementsByName("recent_date_of_issue")[0].parentNode.style.display = "none";
		document.getElementsByName("recent_date_of_issue")[0].value = "";
	}
}
function residency_data_owned_motor_vehicles()
{
	if (this.children[2].selected == true)
	{
		document.getElementsByName("original_date_of_registration")[0].parentNode.style.display = "block";
		document.getElementsByName("recent_date_of_registration")[0].parentNode.style.display = "block";
	}
	else
	{
		document.getElementsByName("original_date_of_registration")[0].parentNode.style.display = "none";
		document.getElementsByName("original_date_of_registration")[0].value = "";
		document.getElementsByName("recent_date_of_registration")[0].parentNode.style.display = "none";
		document.getElementsByName("recent_date_of_registration")[0].value = "";
	}
}
function residency_data_income_tax()
{
	if (this.children[1].selected == true)
		document.getElementsByName("taxes_reasons")[0].parentNode.style.display = "block";
	else
	{
		document.getElementsByName("taxes_reasons")[0].parentNode.style.display = "none";
		document.getElementsByName("taxes_reasons")[0].value = "";
	}
}

var prev_button = document.getElementById("prev_button");
var save_button = document.getElementById("save_button");
function save_click()
{
	var nav_box = document.getElementsByClassName("nav_box");
	this.style.backgroundColor = "#691630";
	this.style.borderColor = "#FBFBFB";	
	if (this == prev_button)
	{
		this.firstElementChild.style.color = "#FBFBFB";
		if (document.addEventListener)
		{
			for (var i = 0; i < 8; ++i)
			{
				if (nav_box[i].style.backgroundColor == "rgb(105, 22, 48)")
				{
					if (i > 0)
					{
						nav_box[i-1].addEventListener("click", nav_box_click, false);
						nav_box[i-1].click();
						break;
					}
					else
						break;
				}
			}
		}
		else if (document.attachEvent)
		{
			for (var i = 0; i < 8; ++i)
			{
				if (nav_box[i].style.backgroundColor == "rgb(105, 22, 48)")
				{
					if (i > 0)
					{
						nav_box[i-1].attachEvent("onclick", nav_box_click);
						nav_box[i-1].click();
						break;
					}
					else
						break;
				}
			}
		}
		else
		{
			for (var i = 0; i < 8; ++i)
			{
				if (nav_box[i].style.backgroundColor == "rgb(105, 22, 48)")
				{
					if (i > 0)
					{
						nav_box[i-1].onclick = nav_box_click;
						nav_box[i-1].click();
						break;
					}
					else
						break;
				}
			}
		}
	}
	else
	{
		this.style.color = "#FBFBFB";
		form_submit();
		if (document.addEventListener)
		{
			for (var i = 0; i < 8; ++i)
			{
				if (nav_box[i].style.backgroundColor == "rgb(105, 22, 48)")
				{
					if (i < 7)
					{
						nav_box[i+1].addEventListener("click", nav_box_click, false);
						nav_box[i+1].click();
						break;
					}
				}
			}
		}
		else if (document.attachEvent)
		{
			for (var i = 0; i < 8; ++i)
			{
				if (nav_box[i].style.backgroundColor == "rgb(105, 22, 48)")
				{
					if (i < 7)
					{
						nav_box[i+1].attachEvent("onclick", nav_box_click);
						nav_box[i+1].click();
						break;
					}
				}
			}			
		}
		else
		{
			for (var i = 0; i < 8; ++i)
			{
				if (nav_box[i].style.backgroundColor == "rgb(105, 22, 48)")
				{
					if (i < 7)
					{
						nav_box[i+1].onclick = nav_box_click;
						nav_box[i+1].click();
						break;
					}
				}
			}
		}
	}
}
function save_over()
{
	this.style.backgroundColor = "#FBFBFB";
	this.style.borderColor = "#691630";
	if (this == prev_button)
		this.firstElementChild.style.color = "#691630";
	else
		this.style.color = "#691630";
	if (document.addEventListener)
	{
		this.addEventListener("click", save_click, false);
		this.addEventListener("mouseout", save_out, false);
	}
	else if (document.attachEvent)
	{
		this.attachEvent("onclick", save_click);
		this.attachEvent("onmouseout", save_out);
	}
	else
	{
		this.onclick = save_click;
		this.onmouseout = save_out;
	}
}
if (document.addEventListener)
{
	prev_button.addEventListener("mouseover", save_over, false);
	save_button.addEventListener("mouseover", save_over, false);
}
else if (document.attachEvent)
{
	prev_button.attachEvent("onmouseover", save_over);
	save_button.attachEvent("onmouseover", save_over);
}
else
{
	prev_button.onmouseover = save_over;
	save_button.onmouseover = save_over;
}
function save_out()
{
	this.style.backgroundColor = "#FBFBFB";
	this.style.borderColor = "#B0B0B0";
	this.style.color = "#B0B0B0";
	if (this == prev_button)
		this.firstElementChild.style.color = "#B0B0B0";
	else
		this.style.color = "#B0B0B0";
	if (document.removeEventListener)
	{
		this.removeEventListener("click", save_click, false);
		this.removeEventListener("mouseout", save_out, false);
	}
	else if (document.detachEvent)
	{
		this.detachEvent("onclick", save_click);
		this.detachEvent("onmouseout", save_out);
	}
	else
	{
		this.onclick = null;
		this.onmouseout = null;
	}
}

function form_submit(){return;}