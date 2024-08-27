import React, { useEffect, useRef, useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import destinationList from "/json/destination.json";
import cruiselengthList from "/json/cruiselength.json";
import cruiselineList from "/json/cruiseline.json";
import cruiseShipsList from "/json/cruiseShip.json";
import departureportList from "/json/departureport.json";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";

function CruiseForm() {
  const toast = useRef(null);
  const [travelers, settravelers] = useState(null);
  const [date, setDate] = useState(null);
  const [destination, setDestination] = useState([]);
  const [cruiselength, setCruiselength] = useState([]);
  const [cruiseline, setcruiseline] = useState([]);
  const [cruiseShip, setCruiseShip] = useState([]);
  const [departureport, setDepartureport] = useState([]);
  const [destinationListitems, setDestinationListItems] = useState([]);
  const [cruiselengthListitems, setCruiselengthListItems] = useState([]);
  const [cruiselineListitems, setcruiselineListItems] = useState([]);
  const [cruiseShipListitems, setcruiseShipListItems] = useState([]);
  const [departureportListitems, setdepartureportListItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const traveler = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5+", value: "5+" },
  ];
  let handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //   *validate the name field can't enter the number
  let handleKeyDown = (e) => {
    if (e.ctrlKey || e.altKey) {
      e.preventDefault();
    } else {
      const allowedKeys = [
        "Backspace",
        "Tab",
        "Delete",
        " ", // Space
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
        "End",
        "Home",
      ];

      // Allow A-Z keys
      const isAlpha = /^[a-zA-Z]$/.test(e.key);

      if (!allowedKeys.includes(e.key) && !isAlpha) {
        e.preventDefault();
      }
    }
  };

  //   *validate the Email field
  let handleEmailKeyDown = (e) => {
    if (e.ctrlKey || e.altKey) {
      e.preventDefault();
    } else {
      // Define allowed keys
      const allowedKeys = [
        "Backspace",
        "Tab",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Enter",
        ".",
        "@",
        "-",
        "_",
      ];

      // Allow alphanumeric characters and specific special characters
      const isAlphanumeric = /^[a-zA-Z0-9]$/.test(e.key);
      const isSpecialChar = /^[._@-]$/.test(e.key);
      const isControlKey = allowedKeys.includes(e.key);

      if (!isAlphanumeric && !isSpecialChar && !isControlKey) {
        e.preventDefault();
      }
    }
  };
  //   *validate the mobile number field
  let handleMobileNumberKeyDown = (e) => {
    if (e.shiftKey || e.ctrlKey || e.altKey) {
      e.preventDefault();
    } else {
      // Define allowed keys
      const allowedKeys = [
        "Backspace",
        "Tab",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Enter",
        ")",
        "*",
        "@",
      ];

      // Allow number keys (0-9 and numpad numbers)
      const isNumber = /^\d$/.test(e.key);
      const isNumpadNumber = e.code.startsWith("Numpad") && /^\d$/.test(e.key);

      if (!allowedKeys.includes(e.key) && !isNumber && !isNumpadNumber) {
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    setDestinationListItems(
      destinationList.map((item) => ({
        label: item.value,
        value: item,
      }))
    );
  }, []);
  useEffect(() => {
    setCruiselengthListItems(
      cruiselengthList.map((item) => ({
        label: item.value + "Nights",
        value: item,
      }))
    );
  }, []);
  useEffect(() => {
    setcruiselineListItems(
      cruiselineList.map((item) => ({
        label: item.value,
        value: item,
      }))
    );
  }, []);
  useEffect(() => {
    setcruiseShipListItems(
      cruiseShipsList.map((item) => ({
        label: item.value,
        value: item,
      }))
    );
  }, []);
  useEffect(() => {
    setdepartureportListItems(
      departureportList.map((item) => ({
        label: item.value,
        value: item,
      }))
    );
  }, []);

  const handleDestinationChange = (e) => {
    setDestination(e.value);
  };
  const handleCruiselengthChange = (e) => {
    setCruiselength(e.value);
  };
  const handleCruiseLineChange = (e) => {
    setcruiseline(e.value);
  };
  const handleCruiseShipChange = (e) => {
    setCruiseShip(e.value);
  };
  const handleCruisePortChange = (e) => {
    setDepartureport(e.value);
  };

  const panelFooterTemplate = () => (
    <div className="py-2 px-3">
      <div className="bottom row">
        <div className="col-md-6 ps-1">
          <button className="btn btn-primary apply_btn" value="filter">
            Apply Filters
          </button>
        </div>
        <div className="col-md-6 ps-1">
          <button className="btn btn-primary apply_btn_cancel" value="filter">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  const getDestinationLabel = (items) => {
    const count = items.length;
    return `Destination [${count}]`;
  };
  const getLengthLabel = (items) => {
    const count = items.length;
    return `Cruise Length [${count}]`;
  };
  const getLineLabel = (items) => {
    const count = items.length;
    return `Cruise Line [${count}]`;
  };
  const getShipLabel = (items) => {
    const count = items.length;
    return `Cruise Ship [${count}]`;
  };
  const getPortLabel = (items) => {
    const count = items.length;
    return `Cruise Port [${count}]`;
  };

  const today = new Date();
  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };
  const formatDropdownValues = (dropdownValues) => {
    if (dropdownValues.length === 1) {
      return dropdownValues[0].value; // Single value
    } else {
      return JSON.stringify(dropdownValues.map((d) => d.value)); // Multiple values as array
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the form data
    const postData = new FormData();
    postData.append("name", formData.name);
    postData.append("email", formData.email);
    postData.append("number", formData.number);
    postData.append("travelers", travelers);

    // Handle date range
    if (date && date.length === 2) {
      postData.append("startDate", date[0].toISOString());
      postData.append("endDate", date[1].toISOString());
    } else {
      postData.append("startDate", "");
      postData.append("endDate", "");
    }

    // Append selected options as JSON
    postData.append("destination", formatDropdownValues(destination));
    postData.append("cruiselength", formatDropdownValues(cruiselength));
    postData.append("cruiseline", formatDropdownValues(cruiseline));
    postData.append("cruiseShip", formatDropdownValues(cruiseShip));
    postData.append("departureport", formatDropdownValues(departureport));

    // Format form data for the toast, excluding empty values
    let formDataString = "";
    for (let [key, value] of postData.entries()) {
      if (value && typeof value === "string" && value.trim() !== "[]") {
        // Check if value is not empty or not an empty array
        // Format date values if the key contains 'Date'
        if (key === "startDate" || key === "endDate") {
          value = formatDate(value);
        }
        formDataString += `${key}: ${value}\n`;
      }
    }

    // Show the toast
    toast.current.show({
      severity: "info",
      summary: "Form Data",
      detail: formDataString || "No data provided",
      life: 5000, // Duration in ms
    });

    // Reset form fields
    setFormData({ name: "", email: "", number: "", travelers: "" });
    setDate(null);
    settravelers(null);
    setDestination([]);
    setCruiselength([]);
    setcruiseline([]);
    setCruiseShip([]);
    setDepartureport([]);
  };

  console.log(
    formData.name,
    formData.email,
    formData.number,
    formData.travelers,
    date,
    destination,
    cruiselength,
    cruiseline,
    cruiseShip,
    departureport
  );
  return (
    <div className="main_section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 p_lrzero">
            <div className="form-left">
              <Toast ref={toast} />
              <form
                onSubmit={handleSubmit}
                action=""
                className="needs-validation"
                autoComplete="off"
                method="post"
                id="cruiseForm"
              >
                <div className="upperside">
                  <h2 className="mb-1 form_heding">Cruise Inquiry </h2>
                  <div className="form-row row m_bottom">
                    <div className="form-group col-md-6 p_lzero">
                      <label htmlFor="name">Name</label>
                      <InputText
                        className="form-control input-sm input-sm2"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                        onKeyDown={handleKeyDown}
                        placeholder="Please enter your name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6 p_lzero">
                      <label htmlFor="email">Email</label>
                      <InputText
                        type="email"
                        className="form-control input-sm input-sm2"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        onKeyDown={handleEmailKeyDown}
                        value={formData.email}
                        placeholder="Please enter a valid email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row row mb-1">
                    <div className="form-group col-md-6 mb-2 p_lzero">
                      <label htmlFor="number">Number</label>
                      <InputText
                        id="number"
                        name="number"
                        onKeyDown={handleMobileNumberKeyDown}
                        value={formData.number}
                        pattern="[0-9]{10}"
                        maxLength="10"
                        className="form-control input-sm input-sm2"
                        keyfilter="int"
                        placeholder="Please enter your phone number"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-6 p_lzero mb-2 trav">
                      <label>Travelers</label>
                      <Dropdown
                        id="travelers"
                        name="travelers"
                        value={travelers}
                        onChange={(e) => settravelers(e.value)}
                        options={traveler}
                        optionLabel="label"
                        placeholder="Travelers"
                        className="btn-secondary dropdown-toggle"
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #333",
                    width: "102%",
                    height: "2px",
                  }}
                >
                  &nbsp;
                </div>
                <div className="downside">
                  <div className="form-row row m_bottom">
                    <div className="form-group col-md-6 p_lzero nw_list">
                      <label>Destination</label>
                      <MultiSelect
                        name="destination"
                        value={destination}
                        options={destinationListitems}
                        onChange={handleDestinationChange}
                        showSelectAll={false}
                        closeIcon
                        virtualScrollerOptions={{ itemSize: 43 }}
                        maxSelectedLabels={1}
                        selectedItemsLabel={getDestinationLabel(destination)}
                        placeholder="Destination (Any)"
                        panelFooterTemplate={panelFooterTemplate}
                        className="btn-secondary dropdown-toggle"
                      />
                    </div>

                    <div className="form-group col-md-6 p_lzero nw_list">
                      <label>Cruise Length</label>
                      <MultiSelect
                        value={cruiselength}
                        options={cruiselengthListitems}
                        onChange={handleCruiselengthChange}
                        showSelectAll={false}
                        closeIcon
                        virtualScrollerOptions={{ itemSize: 43 }}
                        maxSelectedLabels={1}
                        placeholder="Cruise Length (Any)"
                        selectedItemsLabel={getLengthLabel(cruiselength)}
                        panelFooterTemplate={panelFooterTemplate}
                        className="btn-secondary dropdown-toggle"
                      />
                    </div>
                  </div>
                  <div className="form-row row m_bottom">
                    {/* cruise Date */}
                    <div className="form-group col-md-6 p_lzero nw_list">
                      <label>Depature Date</label>
                      <Calendar
                        id="depart_date"
                        name="depart_date"
                        className="btn-secondary dropdown-toggle"
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        selectionMode="range"
                        hideOnRangeSelection
                        minDate={today}
                        dateFormat="mm/dd/yy"
                        placeholder="Depature Date (Any)"
                        showButtonBar
                      />
                    </div>

                    {/* cruise line */}
                    <div className="form-group col-md-6 p_lzero nw_list">
                      <label>Cruise Line</label>
                      <MultiSelect
                        value={cruiseline}
                        options={cruiselineListitems}
                        onChange={handleCruiseLineChange}
                        showSelectAll={false}
                        closeIcon
                        virtualScrollerOptions={{ itemSize: 43 }}
                        maxSelectedLabels={1}
                        selectedItemsLabel={getLineLabel(cruiseline)}
                        placeholder="Cruise Line (Any)"
                        panelFooterTemplate={panelFooterTemplate}
                        className="btn-secondary dropdown-toggle"
                      />
                    </div>
                  </div>

                  {/* cruise ship */}
                  <div className="form-row row m_bottom">
                    <div className="form-group col-md-6 p_lzero nw_list">
                      <label>Cruise Ship</label>
                      <MultiSelect
                        value={cruiseShip}
                        options={cruiseShipListitems}
                        onChange={handleCruiseShipChange}
                        showSelectAll={false}
                        closeIcon
                        virtualScrollerOptions={{ itemSize: 43 }}
                        maxSelectedLabels={1}
                        selectedItemsLabel={getShipLabel(cruiseShip)}
                        placeholder="Cruise Ship (Any)"
                        panelFooterTemplate={panelFooterTemplate}
                        className="btn-secondary dropdown-toggle"
                      />
                    </div>

                    {/* cruise port */}
                    <div className="form-group col-md-6 p_lzero nw_list">
                      <label>Cruise Port</label>
                      <MultiSelect
                        value={departureport}
                        options={departureportListitems}
                        onChange={handleCruisePortChange}
                        showSelectAll={false}
                        closeIcon
                        virtualScrollerOptions={{ itemSize: 43 }}
                        maxSelectedLabels={1}
                        selectedItemsLabel={getPortLabel(departureport)}
                        placeholder="Cruise Port (Any)"
                        panelFooterTemplate={panelFooterTemplate}
                        className="btn-secondary dropdown-toggle"
                      />
                    </div>
                  </div>
                  <div
                    className="form-row row m_bottom"
                    style={{ marginTop: "33px" }}
                  ></div>
                  <div className="row">
                    <div className="form-group col-md-6 p_lzero">&nbsp;</div>
                    <div className="form-group col-md-6 p_lzero">
                      <div className="form-group custombtn position-relative">
                        <button
                          type="submit"
                          className="btn btn_submit position-absolute"
                          style={{ top: "-35px", marginTop: "7px" }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/*  right side */}

            <div className="form-right ">
              <div className="upto_main">
                <div className="uptotxt">
                  <div className="Up_to">Up to</div>
                  <div className="OFF">37% OFF</div>
                  <div className="Cheap_Cruises">Cheap Cruises</div>
                </div>
                <div className="banner_sec_por text-center">
                  <h1>Need Help Booking?</h1>
                  <p className="banner_deal">
                    It's Free!{" "}
                    <span>
                      <br />
                      Call Experts 24x7x365
                    </span>
                  </p>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="banner_call">
                        <i className="fas fa fa-phone" aria-hidden="true"></i>
                        1-844-313-1111
                      </div>
                    </div>
                  </div>
                  <div className="world_lar">World’s Largest Cruise Agency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CruiseForm;
