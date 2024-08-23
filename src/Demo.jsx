import React, { useState, useEffect } from "react";
import { MultiSelect } from "primereact/multiselect";
import destinationList from "/json/destination.json";
import cruiselengthList from "/json/cruiselength.json";
import { Dropdown } from 'primereact/dropdown';

const Demo = () => {
  const [travelers, settravelers] = useState(null);
  const [destination, setDestination] = useState([]);
  const [cruiselength, setCruiselength] = useState([]);
  const [destinationListitems, setDestinationListItems] = useState([]);
  const [cruiselengthListitems, setCruiselengthListItems] = useState([]);

  const traveler = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5+", value: "5+" },
  ];

  useEffect(() => {
    setDestinationListItems(
      destinationList.map((item) => ({
        label: item.destination,
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

  const handleDestinationChange = (e) => {
    setDestination(e.value);
  };

  const handleCruiselengthChange = (e) => {
    setCruiselength(e.value);
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

  return (
    <>
      <div className="form-row row m_bottom">
        <div className="form-group col-md-6 p_lzero nw_list">
          <label>Destination</label>
          <MultiSelect
            value={destination}
            options={destinationListitems}
            onChange={handleDestinationChange}
            showSelectAll={false}
            closeIcon
            virtualScrollerOptions={{ itemSize: 43 }}
            maxSelectedLabels={1}
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
            panelFooterTemplate={panelFooterTemplate}
            className="btn-secondary dropdown-toggle"
          />
        </div>
      </div>

      <div className="form-row row m_bottom">
        <div className="form-group col-md-6 p_lzero nw_list">
          <div className="form-group col-md-6 p_lzero mb-2">
          <label>Travelers</label>
          <Dropdown
            value={travelers}
            onChange={(e) => settravelers(e.value)}
            options={traveler}
            placeholder="Travelers"
            className="w-full md:w-14rem"
          />
        </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
