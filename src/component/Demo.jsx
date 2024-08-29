import destinationList from "/json/destination.json";
import cruiselengthList from "/json/cruiselength.json";
import { MultiSelect } from "primereact/multiselect";
import React, { useEffect, useState } from "react";

function Demo() {
  const [destination, setDestination] = useState([]);
  const [cruiselength, setCruiselength] = useState([]);
  const [destinationListitems, setDestinationListItems] = useState([]);
  const [cruiselengthListitems, setCruiselengthListItems] = useState([]);

  useEffect(() => {
    setDestinationListItems([
      { label: "Any value", value: "Any value" },
      ...destinationList.map((item) => ({
        label: item.value,
        value: item.value,
      })),
    ]);
  }, []);

  useEffect(() => {
    setCruiselengthListItems([
      { label: "Any value", value: "Any value" },
      ...cruiselengthList.map((item) => ({
        label: item.value + " Nights",
        value: item.value,
      })),
    ]);
  }, []);

  const handleDestinationChange = (e) => {
    const selectedValues = e.value;
    if (selectedValues.includes("Any value")) {
      // If 'Any value' is selected, clear all other selections
      setDestination(["Any value"]);
    } else {
      // If 'Any value' is not selected, manage selections
      setDestination(selectedValues.filter((value) => value !== "Any value"));
    }
    console.log("Selected Destinations:", selectedValues);
  };

  const handleCruiselengthChange = (e) => {
    const selectedValues = e.value;
    if (selectedValues.includes("Any value")) {
      // If 'Any value' is selected, clear all other selections
      setCruiselength(["Any value"]);
    } else {
      // If 'Any value' is not selected, manage selections
      setCruiselength(selectedValues.filter((value) => value !== "Any value"));
    }
    console.log("Selected Cruise Lengths:", selectedValues);
  };

  const getDestinationLabel = (items) => {
    const count = items.length;
    return `Destination [${count}]`;
  };

  const getLengthLabel = (items) => {
    const count = items.length;
    return `Cruise Length [${count}]`;
  };

  return (
    <div className="main_section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 p_lrzero">
            <div className="form-left">
              <form
                action=""
                className="needs-validation"
                autoComplete="off"
                method="post"
                id="cruiseForm"
              >
                <div className="upperside">
                  <h2 className="mb-1 form_heding">Cruise Inquiry </h2>
                </div>

                <div className="downside">
                  <div className="form-row row m_bottom">
                    <div className="form-group col-md-6 p_lzero nw_list">
                      <label>Destination</label>
                      <MultiSelect
                        id="destination"
                        name="destination"
                        value={destination}
                        options={destinationListitems}
                        onChange={handleDestinationChange}
                        showSelectAll={false}
                        closeIcon
                        virtualScrollerOptions={{ itemSize: 43 }}
                        maxSelectedLabels={0}
                        selectedItemsLabel={getDestinationLabel(destination)}
                        placeholder="Destination (Any)"
                        className="btn-secondary dropdown-toggle"
                      />
                    </div>

                    <div className="form-group col-md-6 p_lzero nw_list">
                      <label>Cruise Length</label>
                      <MultiSelect
                        id="cruiselength"
                        name="cruiselength"
                        value={cruiselength}
                        options={cruiselengthListitems}
                        onChange={handleCruiselengthChange}
                        showSelectAll={false}
                        closeIcon
                        virtualScrollerOptions={{ itemSize: 43 }}
                        maxSelectedLabels={0}
                        placeholder="Cruise Length (Any)"
                        selectedItemsLabel={getLengthLabel(cruiselength)}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
