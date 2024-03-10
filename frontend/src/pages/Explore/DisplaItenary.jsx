const DisplaItenary = ({ location, itenary, contentLoaded }) => {
  return itenary != "" ? <pre style={{textWrap:"pretty",overflowY:"scroll",height:"75vh"}}>{itenary}</pre> : "loading...";
};

export default DisplaItenary;
