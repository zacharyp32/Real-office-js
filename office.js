let headers = document.getElementsByClassName("heady");
const idArray = [];

// for(let i=0;i<headers.length;i++){

// }

for (let item of headers) {
  item.addEventListener("click", displayInputs);
}

function displayInputs(e) {
  if (e.target.classList.value !== "heady") return;

  let inputsStyle = e.target.children[0].style;
  if (inputsStyle.display === "") inputsStyle.display = "flex";
  else inputsStyle.display = "";
}

function paperWork() {
  //Grab HTML elements--------------------------------------
  const dateInput = document.getElementById("date-input");
  const adrInput = document.getElementById("address-input");
  const companyInput = document.getElementById("company-input");

  const systemIdInput = document.getElementById("unit-num-input");
  const packUnitCheck = document.getElementById("punit-check-input");
  const miniSplitCheck = document.getElementById("mini-check-input");
  const furnaceCheck = document.getElementById("furnace-check");
  const coilCheck = document.getElementById("coil-check");
  const condenserCheck = document.getElementById("condenser-check");
  const ductsCheck = document.getElementById("ducts-check");

  const returnLocInput = document.getElementById("return-loc-input");
  const supplyLocInput = document.getElementById("supply-loc-input");
  const rValueinput = document.getElementById("r-value-input");
  const numFilterInput = document.getElementById("num-filter-input");
  const locFilterInput = document.getElementById("loc-filter-input");

  const furInMake = document.getElementById("furnace-input");
  const furInModel = document.getElementById("furnace-model-input");
  const furInSerial = document.getElementById("furnace-serial-input");

  const evapInMake = document.getElementById("evap-make-input");
  const evapInModel = document.getElementById("evap-model-input");
  const evapInSerial = document.getElementById("evap-serial-input");
  // const evapInSeer = document.getElementById("seer-evap");
  // const evapInEer = document.getElementById("eer-evap");
  // const evapInTons = document.getElementById("tons-evap");

  const acInMake = document.getElementById("a/c-input");
  const acInModel = document.getElementById("ac-model-input");
  const acInSerial = document.getElementById("ac-serial-input");
  const seerInput = document.getElementById("seer-input");
  const eerInput = document.getElementById("eer-input");
  const tempInput = document.getElementById("temp-input");
  const indoorTempI = document.getElementById("indoor-temp-input");
  const tons = document.getElementById("tons");

  const cutInCheck = document.getElementById("cutin-check");
  const replaceCheck = document.getElementById("replace-check");
  const altCheck = document.getElementById("alt-check");
  const newCheck = document.getElementById("new-check");
  const commercialCheck = document.getElementById("commercial-check");

  const fortyFeetCheck = document.getElementById("forty-feet-input");
  const prevTestedCheck = document.getElementById("already-tested");
  const asbestos = document.getElementById("a-b");

  const dlTargetInput = document.getElementById("dlt-input");
  const leakage = document.getElementById("leakage");
  const openCheck = document.getElementById("open-check");
  const pbsCheck = document.getElementById("pbs-check");
  const leakOutside = document.getElementById("leak-outside-check");
  const actualCheck = document.getElementById("actual-check");

  const weighInInput = document.getElementById("weigh-in-input");
  const lpInput = document.getElementById("lp-input");
  const hpInput = document.getElementById("hp-input");
  const evInput = document.getElementById("ev-input");
  const coInput = document.getElementById("co-input");
  const t1Input = document.getElementById("t1-input");
  const t2Input = document.getElementById("t2-input");
  const rqSubInput = document.getElementById("rq-s-input");

  const inputAirflow = document.getElementById("input-airflow");
  const treeHundCheck = document.getElementById("300-check");
  const treeFidCheck = document.getElementById("350-check");
  const iaqInput = document.getElementById("iaq-input");
  const flowRCheck = document.getElementById("flow-remed-check");

  const bdInput = document.getElementById("bd-input");
  const fwdInput = document.getElementById("fan-w-draw");
  const passCheck = document.getElementById("pass-check");
  const failCheck = document.getElementById("fail-check");

  const notes = document.getElementById("notes");
  const inputBtu = document.getElementById("input-btu");
  const outputBtu = document.getElementById("output-btu");
  const furnaceEff = document.getElementById("furnace-eff");

  const genId = document.getElementById("general-id");
  const furId = document.getElementById("fur-id");
  const evapId = document.getElementById("evap-id");
  const miniSplitId = document.getElementById("mini-split-id");
  const acId = document.getElementById("ac-id");
  const ductId = document.getElementById("duct-id");
  const ductExId = document.getElementById("duct-exempt-id");
  const ductInfoId = document.getElementById("duct-info-id");
  const rcaId = document.getElementById("rca-id");
  const airflowId = document.getElementById("airflow-id");
  const bdId = document.getElementById("bd-id");
  const fwdId = document.getElementById("fwd-id");
  const statusId = document.getElementById("status-id");
  const qcId = document.getElementById("qc-id");
  const notesId = document.getElementById("notes-id");

  const lockCapsCheck = document.getElementById("lock-caps-check");
  const acSecureCheck = document.getElementById("ac-secure-check");
  const fuseSizeCheck = document.getElementById("fuse-size-check");
  const smokeDetectCheck = document.getElementById("smoke-detect-check");
  const gasLegCheck = document.getElementById("gas-leg-check");

  const hardWiredCheck = document.getElementById("hard-wired");

  const genAnsWrapper = document.getElementById("gen-ans-wrapper");
  const furAnsWrapper = document.getElementById("fur-ans-wrapper");
  const evapAnsWrapper = document.getElementById("evap-ans-wrapper");
  const miniSplitAnsWrapper = document.getElementById("mini-split-ans-wrapper");
  const acAnsWrapper = document.getElementById("ac-ans-wrapper");
  const leakAnsWrapper = document.getElementById("leak-ans-wrapper");
  const ductExWrapper = document.getElementById("duct-exempt-wrapper");
  const ductInfoWrapper = document.getElementById("duct-info-wrapper");
  const rcaAnsWrapper = document.getElementById("rca-ans-wrapper");
  const flowAnsWrapper = document.getElementById("flow-ans-wrapper");
  const bdAnsWrapper = document.getElementById("bd-ans-wrapper");
  const fwdAnsWrapper = document.getElementById("fwd-ans-wrapper");
  const statusAnsWrapper = document.getElementById("stat-ans-wrapper");
  const qcAnsWrapper = document.getElementById("qc-ans-wrapper");
  const notesAnsWrapper = document.getElementById("notes-ans-wrapper");

  genAnsWrapper.innerHTML = "";
  evapAnsWrapper.innerHTML = "";
  furAnsWrapper.innerHTML = "";
  acAnsWrapper.innerHTML = "";
  leakAnsWrapper.innerHTML = "";
  ductExWrapper.innerHTML = "";
  ductInfoWrapper.innerHTML = "";
  rcaAnsWrapper.innerHTML = "";
  flowAnsWrapper.innerHTML = "";
  bdAnsWrapper.innerHTML = "";
  fwdAnsWrapper.innerHTML = "";
  statusAnsWrapper.innerHTML = "";
  qcAnsWrapper.innerHTML = "";
  notesAnsWrapper.innerHTML = "";

  genId.style.display = "none";
  furId.style.display = "none";
  evapId.style.display = "none";
  acId.style.display = "none";
  ductId.style.display = "none";
  ductExId.style.display = "none";
  ductInfoId.style.display = "none";
  rcaId.style.display = "none";
  airflowId.style.display = "none";
  bdId.style.display = "none";
  fwdId.style.display = "none";
  statusId.style.display = "none";
  qcId.style.display = "none";
  notesId.style.display = "none";

  if (dateInput.value) {
    genId.style.display = "block";
    if (systemIdInput.value) {
      let systemIdShow = document.createElement("p");
      systemIdShow.textContent = "System Name: " + systemIdInput.value;
      genAnsWrapper.appendChild(systemIdShow);
    }
    let dateShow = document.createElement("p");
    let adrShow = document.createElement("p");
    let companyShow = document.createElement("p");
    dateShow.textContent = "Date: " + dateInput.value;
    adrShow.textContent = "Address: " + adrInput.value;
    companyShow.textContent = "Company: " + companyInput.value;
    genAnsWrapper.appendChild(dateShow);
    genAnsWrapper.appendChild(adrShow);
    genAnsWrapper.appendChild(companyShow);
  }

  // -----------------------------------------------------------------------

  if (cutInCheck.checked) {
    let cutinShow = document.createElement("p");
    cutinShow.textContent = "Type: Cut-In";
    genAnsWrapper.appendChild(cutinShow);
  }
  if (replaceCheck.checked) {
    let replaceShow = document.createElement("p");
    replaceShow.textContent = "Type: Replacement";
    genAnsWrapper.appendChild(replaceShow);
  }
  if (altCheck.checked) {
    let altShow = document.createElement("p");
    altShow.textContent = "Type: Alteration";
    genAnsWrapper.appendChild(altShow);
  }
  if (newCheck.checked) {
    let newShow = document.createElement("p");
    newShow.textContent = "Type: New Construction";
    genAnsWrapper.appendChild(newShow);
  }
  if (commercialCheck.checked) {
    let commShow = document.createElement("p");
    commShow.textContent = "Type: Commercial";
    genAnsWrapper.appendChild(commShow);
  }

  // --------------------------------------------------------------------
  if (packUnitCheck.checked)
    showPackageUnit(
      furInMake,
      furInModel,
      furInSerial,
      furnaceEff,
      inputBtu,
      outputBtu,
      tons,
      seerInput,
      eerInput
    );
  else if (miniSplitCheck.checked)
    showMiniSplit(
      miniSplitId,
      miniSplitAnsWrapper,
      furInMake,
      furInModel,
      furInSerial,
      furnaceEff,
      inputBtu,
      outputBtu,
      tons,
      seerInput,
      eerInput
    );
  else
    showFurnace(
      furInMake,
      furInModel,
      furInSerial,
      furnaceEff,
      furId,
      inputBtu,
      outputBtu,
      furAnsWrapper
    );
  // -------------------------------------------------------------------------------

  if (evapInMake.value) {
    evapId.style.display = "block";
    let acShow = document.createElement("p");
    let acModShow = document.createElement("p");
    let acSerialShow = document.createElement("p");
    let tonsShow = document.createElement("p");
    acShow.textContent = "Make: " + evapInMake.value;
    acModShow.textContent = "Model: " + evapInModel.value;
    acSerialShow.textContent = "Serial: " + evapInSerial.value;
    // tonsShow.textContent = "Tonnage: " + evapInTons.value;
    evapAnsWrapper.appendChild(acShow);
    evapAnsWrapper.appendChild(acModShow);
    evapAnsWrapper.appendChild(acSerialShow);
    evapAnsWrapper.appendChild(tonsShow);
    // if (evapInSeer.value) {
    //   let seerShow = document.createElement("p");
    //   seerShow.textContent = "SEER: " + seerInput.value;
    //   evapAnsWrapper.appendChild(seerShow);
    // }
    // if (evapInEer.value) {
    //   let eerShow = document.createElement("p");
    //   eerShow.textContent = "EER: " + eerInput.value;
    //   evapAnsWrapper.appendChild(eerShow);
    // }
  }

  // -------------------------------------------------------------------------------------

  if (acInMake.value) {
    acId.style.display = "block";
    let acShow = document.createElement("p");
    let acModShow = document.createElement("p");
    let acSerialShow = document.createElement("p");
    let tonsShow = document.createElement("p");
    acShow.textContent = "Make: " + acInMake.value;
    acModShow.textContent = "Model: " + acInModel.value;
    acSerialShow.textContent = "Serial: " + acInSerial.value;
    tonsShow.textContent = "Tonnage: " + tons.value;
    acAnsWrapper.appendChild(acShow);
    acAnsWrapper.appendChild(acModShow);
    acAnsWrapper.appendChild(acSerialShow);
    acAnsWrapper.appendChild(tonsShow);
    if (seerInput.value) {
      let seerShow = document.createElement("p");
      seerShow.textContent = "SEER: " + seerInput.value;
      acAnsWrapper.appendChild(seerShow);
    }
    if (eerInput.value) {
      let eerShow = document.createElement("p");
      eerShow.textContent = "EER: " + eerInput.value;
      acAnsWrapper.appendChild(eerShow);
    }
    if (tempInput.value) {
      let tempShow = document.createElement("p");
      tempShow.textContent = "Outdoor Temp: " + tempInput.value;
      acAnsWrapper.appendChild(tempShow);
    }
    if (indoorTempI.value) {
      let tempShow = document.createElement("p");
      tempShow.textContent = "Indoor Temp: " + indoorTempI.value;
      acAnsWrapper.appendChild(tempShow);
    }
  }

  // -------------------------------------------------------------------------

  if (prevTestedCheck.checked) {
    ductExId.style.display = "block";
    let preTestedShow = document.createElement("p");
    preTestedShow.textContent = "Previously HERS Verified";
    ductExWrapper.appendChild(preTestedShow);
  }
  if (fortyFeetCheck.checked) {
    ductExId.style.display = "block";
    let fortyShow = document.createElement("p");
    fortyShow.textContent = "New Ducts < 40Ft";
    ductExWrapper.appendChild(fortyShow);
  }
  if (asbestos.checked) {
    ductExId.style.display = "block";
    let asbShow = document.createElement("p");
    asbShow.textContent = "Asbestos";
    ductExWrapper.appendChild(asbShow);
  }

  // ------------------------------------------------------------------------

  if (leakage.value) {
    ductId.style.display = "block";
    let leakShow = document.createElement("p");
    let leakTarget = document.createElement("p");
    leakShow.textContent = "Result: " + leakage.value + " CFM";
    leakTarget.textContent = "Target: " + dlTargetInput.value + "%";
    leakAnsWrapper.appendChild(leakShow);
    leakAnsWrapper.appendChild(leakTarget);
  }
  if (pbsCheck.checked) {
    let smokeShow = document.createElement("p");
    smokeShow.textContent = "Pass by smoke: Yes";
    leakAnsWrapper.appendChild(smokeShow);
  }
  if (leakOutside.checked) {
    let leakOutShow = document.createElement("p");
    leakOutShow.textContent = "Leakage to Outside";
    ductId.appendChild(leakOutShow);
  }
  if (actualCheck.checked) {
    let actShow = document.createElement("p");
    actShow.textContent = "Actual Airflow Method: Yes";
    leakAnsWrapper.appendChild(actShow);
  }

  if (weighInInput.checked) {
    rcaId.style.display = "block";
    let weighInShow = document.createElement("p");
    weighInShow.textContent = "Weigh In Method";
    rcaAnsWrapper.appendChild(weighInShow);
  }

  if (lpInput.value) {
    rcaId.style.display = "block";
    let lpShow = document.createElement("p");
    let hpShow = document.createElement("p");
    let evShow = document.createElement("p");
    let coShow = document.createElement("p");
    let t1Show = document.createElement("p");
    let t2Show = document.createElement("p");
    let subcoolShow = document.createElement("p");
    lpShow.textContent = "LP psi: " + lpInput.value;
    hpShow.textContent = "HP psi: " + hpInput.value;
    evShow.textContent = "Ev: " + evInput.value;
    coShow.textContent = "Co: " + coInput.value;
    t1Show.textContent = "T1: " + t1Input.value;
    t2Show.textContent = "T2: " + t2Input.value;
    subcoolShow.textContent = "Required Subcool: " + rqSubInput.value;
    rcaAnsWrapper.appendChild(lpShow);
    rcaAnsWrapper.appendChild(hpShow);
    rcaAnsWrapper.appendChild(evShow);
    rcaAnsWrapper.appendChild(coShow);
    rcaAnsWrapper.appendChild(t1Show);
    rcaAnsWrapper.appendChild(t2Show);
    rcaAnsWrapper.appendChild(subcoolShow);
  }

  if (inputAirflow.value) {
    airflowId.style.display = "block";
    let airMeasShow = document.createElement("p");
    airMeasShow.textContent = "Result: " + inputAirflow.value + " CFM";
    flowAnsWrapper.appendChild(airMeasShow);
  }

  if (treeHundCheck.checked) {
    let tresHundShow = document.createElement("p");
    tresHundShow.textContent = "300 CFM";
    flowAnsWrapper.appendChild(tresHundShow);
  } else if (treeFidCheck.checked) {
    let tresHundShow = document.createElement("p");
    tresHundShow.textContent = "350 CFM";
    flowAnsWrapper.appendChild(tresHundShow);
  }

  if (iaqInput.value) {
    let iaqShow = document.createElement("p");
    iaqShow.textContent = "IAQ: " + iaqInput.value;
    flowAnsWrapper.appendChild(iaqShow);
  }

  if (flowRCheck.checked) {
    let remedAirShow = document.createElement("p");
    remedAirShow.textContent = "Airflow Remediation: Yes";
    fwdAnsWrapper.appendChild(remedAirShow);
  }

  if (bdInput.value) {
    bdId.style.display = "block";
    let bdShow = document.createElement("p");
    bdShow.textContent = "Result: " + bdInput.value;
    bdAnsWrapper.appendChild(bdShow);
  }
  if (fwdInput.value) {
    fwdId.style.display = "block";
    let fwdShow = document.createElement("p");
    fwdShow.textContent = "Result: " + fwdInput.value;
    fwdAnsWrapper.appendChild(fwdShow);
  }

  // ----------------------------------------------------------------

  if (returnLocInput.value) {
    ductInfoId.style.display = "block";
    let returnLocShow = document.createElement("p");
    let supplyLocShow = document.createElement("p");
    let numFilterShow = document.createElement("p");
    let locFilterShow = document.createElement("p");
    returnLocShow.textContent =
      "Return Ducting Location: " + returnLocInput.value;
    supplyLocShow.textContent =
      "Supply Ducting Location: " + supplyLocInput.value;
    numFilterShow.textContent = "Number of Filters: " + numFilterInput.value;
    locFilterShow.textContent =
      "Location of Filter(s): " + locFilterInput.value;
    ductInfoId.appendChild(returnLocShow);
    ductInfoId.appendChild(supplyLocShow);
    ductInfoId.appendChild(numFilterShow);
    ductInfoId.appendChild(locFilterShow);
  }
  if (rValueinput.value) {
    ductInfoId.style.display = "block";
    let rShow = document.createElement("p");
    rShow.textContent = "R-Value: " + rValueinput.value;
    ductInfoId.appendChild(rShow);
  }

  // --------------------------------------------------------------------------

  if (passCheck.checked) {
    statusId.style.display = "block";
    let passOrFailShow = document.createElement("p");
    passOrFailShow.textContent = "Passed";
    statusAnsWrapper.appendChild(passOrFailShow);
  } else if (failCheck.checked) {
    statusId.style.display = "block";
    let passOrFailShow = document.createElement("p");
    passOrFailShow.textContent = "Failed";
    statusAnsWrapper.appendChild(passOrFailShow);
  }

  if (notes.value) {
    notesId.style.display = "block";
    let notesShow = document.createElement("p");
    notesShow.textContent = notes.value;
    notesAnsWrapper.appendChild(notesShow);
  }
  if (openCheck.checked) {
    let openShow = document.createElement("p");
    openShow.textContent = "Open Chaseway";
    notesAnsWrapper.appendChild(openShow);
  }

  // -----------------------------------------------------------------

  if (condenserCheck.checked && lockCapsCheck.checked === false) {
    qcId.style.display = "block";
    let capsShow = document.createElement("p");
    capsShow.textContent = "Locking Caps: No";
    qcAnsWrapper.appendChild(capsShow);
  }
  if (condenserCheck.checked && acSecureCheck.checked === false) {
    qcId.style.display = "block";
    let secureShow = document.createElement("p");
    secureShow.textContent = "A/C Secured To Pad: No";
    qcAnsWrapper.appendChild(secureShow);
  }
  if (condenserCheck.checked && fuseSizeCheck.checked === false) {
    qcId.style.display = "block";
    let fuseShow = document.createElement("p");
    fuseShow.textContent = "Fuse Size Correct: No";
    qcAnsWrapper.appendChild(fuseShow);
  }
  if (smokeDetectCheck.checked === false) {
    qcId.style.display = "block";
    let detectShow = document.createElement("p");
    detectShow.textContent = "CO/Smoke Detectors: No";
    qcAnsWrapper.appendChild(detectShow);
  }
  if (furnaceCheck.checked && gasLegCheck.checked === false) {
    qcId.style.display = "block";
    let gasLegShow = document.createElement("p");
    gasLegShow.textContent = "Gas Drip Leg: No";
    qcAnsWrapper.appendChild(gasLegShow);
  }

  // ---------------------------------------------------------------------

  if (hardWiredCheck.checked) {
    notesId.style.display = "block";
    let hWiredShow = document.createElement("p");
    hWiredShow.textContent="Furnace Hard-Wired";
    notesAnsWrapper.appendChild(hWiredShow);
  }
}
// blankInputs(climateZone, tons, inputBtu, furnaceEff, outputBtu, inputAirflow, leakage, fwD, notes)

// uncheck(asbestos, furnace, acCheck, packageUnit, newDucts)

// Functions_____________________________________________________________________________________
function showPackageUnit(
  furInMake,
  furInModel,
  furInSerial,
  furnaceEff,
  inputBtu,
  outputBtu,
  tons,
  seerInput,
  eerInput
) {
  const packUnitId = document.getElementById("pack-unit-id");
  const packUnitAnsWrapper = document.getElementById("pac-unit-ans-wrapper");

  packUnitAnsWrapper.innerHTML = "";
  packUnitId.style.display = "block";

  if (furInMake.value) {
    let furMakeShow = document.createElement("p");
    let furModShow = document.createElement("p");
    let furSerialShow = document.createElement("p");
    let iBShow = document.createElement("p");
    let oBShow = document.createElement("p");
    let tonsShow = document.createElement("p");
    furMakeShow.textContent = "Make: " + furInMake.value;
    furModShow.textContent = "Model: " + furInModel.value;
    furSerialShow.textContent = "Serial: " + furInSerial.value;
    iBShow.textContent = "Input BTU: " + inputBtu.value;
    oBShow.textContent = "Output BTU: " + outputBtu.value;
    tonsShow.textContent = "Tonnage: " + tons.value;
    packUnitAnsWrapper.appendChild(furMakeShow);
    packUnitAnsWrapper.appendChild(furModShow);
    packUnitAnsWrapper.appendChild(furSerialShow);
    if (furnaceEff.value) {
      let fEShow = document.createElement("p");
      fEShow.textContent = "AFUE: " + furnaceEff.value + "%";
      packUnitAnsWrapper.appendChild(fEShow);
    }
    packUnitAnsWrapper.appendChild(iBShow);
    packUnitAnsWrapper.appendChild(oBShow);
    packUnitAnsWrapper.appendChild(tonsShow);
    if (seerInput.value) {
      let seerShow = document.createElement("p");
      seerShow.textContent = "SEER: " + seerInput.value;
      packUnitAnsWrapper.appendChild(seerShow);
    }
    if (eerInput.value) {
      let eerShow = document.createElement("p");
      eerShow.textContent = "EER: " + eerInput.value;
      packUnitAnsWrapper.appendChild(eerShow);
    }
  }
}

function showMiniSplit(
  miniSplitId,
  miniSplitAnsWrapper,
  furInMake,
  furInModel,
  furInSerial,
  furnaceEff,
  inputBtu,
  outputBtu,
  tons,
  seerInput,
  eerInput
) {
  // ---------------------------------------

  miniSplitAnsWrapper.innerHTML = "";
  miniSplitId.style.display = "block";

  if (furInMake.value) {
    let furMakeShow = document.createElement("p");
    let furModShow = document.createElement("p");
    let furSerialShow = document.createElement("p");
    let iBShow = document.createElement("p");
    let oBShow = document.createElement("p");
    let tonsShow = document.createElement("p");
    furMakeShow.textContent = "Make: " + furInMake.value;
    furModShow.textContent = "Model: " + furInModel.value;
    furSerialShow.textContent = "Serial: " + furInSerial.value;
    iBShow.textContent = "Input BTU: " + inputBtu.value;
    oBShow.textContent = "Output BTU: " + outputBtu.value;
    tonsShow.textContent = "Tonnage: " + tons.value;
    miniSplitAnsWrapper.appendChild(furMakeShow);
    miniSplitAnsWrapper.appendChild(furModShow);
    miniSplitAnsWrapper.appendChild(furSerialShow);
    if (furnaceEff.value) {
      let fEShow = document.createElement("p");
      fEShow.textContent = "AFUE: " + furnaceEff.value + "%";
      miniSplitAnsWrapper.appendChild(fEShow);
    }
    miniSplitAnsWrapper.appendChild(iBShow);
    miniSplitAnsWrapper.appendChild(oBShow);
    miniSplitAnsWrapper.appendChild(tonsShow);
    if (seerInput.value) {
      let seerShow = document.createElement("p");
      seerShow.textContent = "SEER: " + seerInput.value;
      miniSplitAnsWrapper.appendChild(seerShow);
    }
    if (eerInput.value) {
      let eerShow = document.createElement("p");
      eerShow.textContent = "EER: " + eerInput.value;
      miniSplitAnsWrapper.appendChild(eerShow);
    }
  }
}

// ------------------------------------------------------------------------------

function showFurnace(
  furInMake,
  furInModel,
  furInSerial,
  furnaceEff,
  furId,
  inputBtu,
  outputBtu,
  furAnsWrapper
) {
  // -------------------
  if (furInMake.value) {
    furId.style.display = "block";
    let furMakeShow = document.createElement("p");
    let furModShow = document.createElement("p");
    let furSerialShow = document.createElement("p");
    let iBShow = document.createElement("p");
    let oBShow = document.createElement("p");
    furMakeShow.textContent = "Make: " + furInMake.value;
    furModShow.textContent = "Model: " + furInModel.value;
    furSerialShow.textContent = "Serial: " + furInSerial.value;
    iBShow.textContent = "Input BTU: " + inputBtu.value;
    oBShow.textContent = "Output BTU: " + outputBtu.value;
    furAnsWrapper.appendChild(furMakeShow);
    furAnsWrapper.appendChild(furModShow);
    furAnsWrapper.appendChild(furSerialShow);
    if (furnaceEff.value) {
      let fEShow = document.createElement("p");
      fEShow.textContent = "AFUE: " + furnaceEff.value + "%";
      furAnsWrapper.appendChild(fEShow);
    }
    furAnsWrapper.appendChild(iBShow);
    furAnsWrapper.appendChild(oBShow);
  }
}
