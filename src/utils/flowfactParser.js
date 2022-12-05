export const flowfactParser = (data) => {
  let parsedData = [];
  let arrayData = [];
  const estateURL = "https://import-api.merten-immobilien.de/realestate/";

  function numberWithDots(x) {
    if (!x) return "";
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  let objectStruct = {
    type: "",
    title: "",
    address: "",

    wohnflaeche: "",
    gesamtflaeche: "",

    rooms: "",

    net_costs: "",
    buy_costs: "",
  };

  for (let i = 0; i < data.length; i++) {
    let ob = data[i];
    let objectStruct = {};
    objectStruct.id = ob.id;
    objectStruct.type = ob.type;
    objectStruct.title = ob.details.title;
    objectStruct.address = ob.location.address + ", " + ob.location.city;
    //prettier-ignore
    if (ob.attachments.length)
      objectStruct.image = estateURL + ob.id + "/" + ob.attachments[0].file;

    if (ob.custom) {
      objectStruct.refObject = ob.custom.Referenzobjekt;
      objectStruct.refDate = ob.custom.Vertragsdatum;
      objectStruct.refText = ob.custom.TEXTEXTRA1;
    }

    //check if use GEWERBE/WOHNEN
    if (ob.use === "GEWERBE") {
      objectStruct.square = ob.space.living_space;
    } else if (ob.use === "WOHNEN") {
      objectStruct.living_space = ob.space.living_space;
      objectStruct.rooms = ob.space.room_number;
    }
    //check if type KAUF/MIETE_PACHT
    if (ob.type === "KAUF") {
      objectStruct.costs = numberWithDots(ob.price.price);
      objectStruct.land = ob.space.land_area;
      if (!objectStruct.living_space)
        objectStruct.square_use = ob.space.usable_area;
    } else if (ob.type === "MIETE_PACHT") {
      objectStruct.costs = numberWithDots(ob.price.rent_net);

      if (!objectStruct.living_space && !objectStruct.space)
        objectStruct.square_use = ob.space.usable_area;
    }
    parsedData[objectStruct.id] = ob;
    arrayData.push(objectStruct);
  }
  return { parsedData, arrayData };
};
