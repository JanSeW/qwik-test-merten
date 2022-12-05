export const detailParser = (data) => {
  function capitalize(word) {
    if (!word) return false;
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  let mapping = [{ description: "Objekt-ID", value: data.id }];

  /*
  location:
    addition: "Krämpfervorstadt"
    address: "Leipziger Str."
    address_number: "95"
    city: "Erfurt"
    zip_code: "99085"
  */
  if (data.location) {
    let location = data.location;
    let locationMapping = [
      { description: "Stadtteil", value: location.addition },
      { description: "Straße", value: location.address },
      { description: "Hausnummer", value: location.address_number },
      { description: "Stadt", value: location.city },
      { description: "PLZ", value: location.zip_code },
    ];
    for (let i = 0; i < locationMapping.length; i++) {
      mapping.push(locationMapping[i]);
    }
  }
  /*
  space:
    land_area: 1063
    land_front: 14
    bath_room_number: 1
    living_space: 53.64
    rest_room_number: 1
    room_number: 2
    usable_area: 56
  */
  if (data.space) {
    let space = data.space;
    let spaceMapping = [
      { description: "Grundstücksfläche", value: space.land_area + " m²" },
      { description: "Grundstückslänge", value: space.land_front },
      { description: "Wohnfläche", value: space.living_space + " m²" },
      { description: "Nutzfläche", value: space.usable_area + " m²" },
      { description: "Anzahl Badezimmer", value: space.bath_room_number },
      { description: "Anzahl Schlafzimmer", value: space.rest_room_number },
      { description: "Zimmer / Räume", value: space.room_number },
    ];

    for (let i = 0; i < spaceMapping.length; i++) {
      mapping.push(spaceMapping[i]);
    }
  }
  /* 
  facilities: 
    basement: false;
    elevator: false;
    guest_toilet: null;
    parking_lot: "GARAGE"
    heating:
        beaconing: "GAS"
        type: "ZENTRAL"
  */
  if (data.facilities) {
    let facilities = data.facilities;
    let facilityMapping = [
      { description: "Keller", value: facilities.basement },
      { description: "Fahrstuhl", value: facilities.elevator },
      { description: "Gäste-WC", value: facilities.guest_toilet },
      {
        description: "Parkplatz",
        value: capitalize(facilities.parking_lot),
      },
    ];
    if (data.facilities.heating) {
      facilityMapping.push({
        description: "Befeuerung/Energieträger",
        value: capitalize(facilities.heating.beaconing),
      });
      facilityMapping.push({
        description: "Heizungsart",
        value: capitalize(facilities.heating.type),
      });
    }
    for (let i = 0; i < facilityMapping.length; i++) {
      mapping.push(facilityMapping[i]);
    }
  }
  /* 
  price:
    commissionable: true
    outside_commission: "5,95%"
    price: 100000
    price_per_sqm: 100
    additional: 135
    deposit: 880
    rent_gross: 575
    rent_net: 440
  */

  if (data.price) {
    let price = data.price;
    let priceMapping = [
      { description: "provisionsfähig", value: price.commissionable },
      {
        description: "Käuferprovision",
        value: price.outside_commission,
      },
      {
        description: "Preis pro m²",
        value:
          parseFloat(price.price_per_sqm).toFixed(2).replace(".", ",") + " €",
      },
      {
        description: "Nebenkosten",
        value: parseFloat(price.additional).toFixed(2).replace(".", ",") + " €",
      },
      {
        description: "Kaution",
        value: parseFloat(price.deposit).toFixed(2).replace(".", ",") + " €",
      },
      {
        description: "Warmmiete",
        value: parseFloat(price.rent_gross).toFixed(2).replace(".", ",") + " €",
      },
      {
        description: "Nettokaltmiete",
        value: parseFloat(price.rent_net).toFixed(2).replace(".", ",") + " €",
      },
    ];

    for (let i = 0; i < priceMapping.length; i++) {
      mapping.push(priceMapping[i]);
    }
  }
  /*
    management:
        available_date: "2022-07-01"
    state:
        construction_year: "1997"
  */
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  if (data.management) {
    let management = data.management;
    let managementMapping = [
      {
        description: "Bezugstermin",
        value: new Date(management.available_date).toLocaleDateString(
          "de-DE",
          options
        ),
      },
    ];
    for (let i = 0; i < managementMapping.length; i++) {
      mapping.push(managementMapping[i]);
    }
  }

  if (data.state) {
    let state = data.state;
    let stateMapping = [
      { description: "Baujahr", value: state.construction_year },
    ];
    for (let i = 0; i < stateMapping.length; i++) {
      mapping.push(stateMapping[i]);
    }
  }

  for (let j = 0; j < mapping.length; j++) {
    if (
      String(mapping[j].value).includes("false") ||
      String(mapping[j].value).includes("NaN") ||
      String(mapping[j].value).includes("null") ||
      String(mapping[j].value).includes("Invalid Date") ||
      String(mapping[j].value) === "" ||
      String(mapping[j].value).includes("undefined")
    ) {
      mapping.splice(j, 1);
      j--;
    }
  }
  return mapping;
};
