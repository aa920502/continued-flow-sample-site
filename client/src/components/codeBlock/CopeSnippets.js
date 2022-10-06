export default function CodeSnippets(lead_id, option, fields) {
  const set_function_map = {
    Name:
      '\t\t\t\t\tif (key == "full_name") { \n' +
      "\t\t\t\t\t\tsetName(element.values); \n" +
      "\t\t\t\t\t} \n",
    Email:
      '\t\t\t\t\tif (key == "email") { \n' +
      "\t\t\t\t\t\tsetEmail(element.values); \n" +
      "\t\t\t\t\t} \n",
    Phone:
      '\t\t\t\t\tif (key == "phone_number") { \n' +
      "\t\t\t\t\t\tsetPhoneNumber(element.values); \n" +
      "\t\t\t\t\t} \n",
  };
  const set_statements = {
    Name: 'const [name, setName] = useState(""); \n',
    Email: 'const [email, setEmail] = useState(""); \n',
    Phone: "const [phoneNumber, setPhoneNumber] = useState(0); \n",
  };

  switch (option) {
    case "LR":
      return (
        'router.post("/lead_retrieval", (req, res) => { \n' +
        "\t// Lead retrieval API reference: https://developers.facebook.com/docs/marketing-api/guides/lead-ads/retrieving/#bulk-read\n" +
        "\tconst fb_lead_id = req.body.lead.lead_id; \n" +
        '\tconsole.log("received LEAD ID from frontend: " + fb_lead_id); \n' +
        "\tconst access_token = process.env.ACCESS_TOKEN; \n" +
        "\tconst api = bizSdk.FacebookAdsApi.init(access_token);\n" +
        "\tconst showDebugingInfo = true; // Setting this to true shows more debugging info.\n" +
        "\tif (showDebugingInfo) {\n" +
        "\t\t api.setDebug(true);\n" +
        "\t} \n" +
        "\tconst logApiCallResult = (apiCallName, data) => {\n" +
        "\t\tconsole.log(apiCallName);\n" +
        "\t\tif (showDebugingInfo) {\n" +
        '\t\t\tconsole.log("Data:" + JSON.stringify(data));\n' +
        "\t\t}\n" +
        "\t}; \n" +
        "\tlet fields, params;\n" +
        "\tfields = [];\n" +
        "\tparams = {};\n" +
        "\tlet lead_ad_response, field_data, lead_ad_response_json;\n" +
        "\tvar getRawValue = async function getRawValue() {\n" +
        "\t\tlead_ad_response = await new Lead(fb_lead_id.toString()).get(\n" +
        "\t\t\tfields,\n" +
        "\t\t\tparams\n" +
        "\t\t);\n" +
        "\t\tlead_ad_response_json = JSON.stringify(lead_ad_response);\n" +
        "\t\tvar lead_ad_response_fields = JSON.parse(lead_ad_response_json);\n" +
        "\t\tfield_data = lead_ad_response_fields._data.field_data;\n" +
        "\t\tres.send(field_data);\n" +
        '\t\tlogApiCallResult(" api call complete.", lead_ad_response);\n' +
        "\t};\n" +
        "\tgetRawValue();\n" +
        "})\n"
      );

    case "LPR":
      var prefill_information = "";
      var set_prefill_statements = "";
      fields.forEach(function (item, index) {
        prefill_information += set_function_map[item.value];
        set_prefill_statements += set_statements[item.value];
      });

      return (
        "const [searchParams, setSearchParams] = useSearchParams(); \n" +
        set_prefill_statements +
        'const fb_lead_id = searchParams.get("fbld_id"); \n\n' +
        "useEffect(() => { \n" +
        "\tvar preFillLeadInfo = async function preFillLeadInfo() { \n" +
        "\t\tconst lead = { lead_id: parseInt(fb_lead_id) }; \n" +
        "\t\ttry { \n" +
        '\t\t\tawait axios.post("/lead_retrieval", { lead }).then((response) => { \n' +
        "\t\t\t\tfor (const element of response.data) { \n" +
        prefill_information +
        "\t\t\t\t} \n" +
        "\t\t\t}); \n" +
        "\t\t} catch (error) { \n" +
        "\t\t\t\tconsole.log(error); \n" +
        "\t\t\t} \n" +
        "\t\t}; \n" +
        "\tpreFillLeadInfo(); \n" +
        "}, [searchParams]); "
      );

    case "LAQ":
      var user_information = "";
      fields.forEach(function (item, index) {
        user_information +=
          '            "' + item.value + '": [ ' + item.label + "],\n";
      });

      return (
        "{\n" +
        '    "data": [\n' +
        "        {\n" +
        '            "event_name": "Lead",\n' +
        '            "event_time": ' +
        Date.now() +
        ",\n" +
        '            "action_source": "system_generated",\n' +
        '            "user_data": {\n' +
        '                "lead_id": ' +
        lead_id +
        ",\n" +
        user_information +
        "            },\n" +
        '            "custom_data": {\n' +
        '                "lead_event_source": "Your CRM",\n' +
        '                "event_source": "crm"\n' +
        "            }\n" +
        "        }\n" +
        "    ]\n" +
        "}"
      );
  }
  return lead_id;
}
