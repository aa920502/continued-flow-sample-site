export default function CodeSnippets(lead_id, option, fields){

    const set_function_map = {'Name' : "\t\t\t\t\tif (key == \"full_name\") { \n"
                                + "\t\t\t\t\t\tsetName(element.values); \n"
                                + "\t\t\t\t\t} \n", 
                                'Email' : "\t\t\t\t\tif (key == \"email\") { \n"
                                + "\t\t\t\t\t\tsetEmail(element.values); \n"
                                + "\t\t\t\t\t} \n", 
                                'Phone' : "\t\t\t\t\tif (key == \"phone_number\") { \n"
                                + "\t\t\t\t\t\tsetPhoneNumber(element.values); \n"
                                + "\t\t\t\t\t} \n"};
    const set_statements = {'Name' : "const [name, setName] = useState(\"\"); \n", 
                            'Email' : "const [email, setEmail] = useState(\"\"); \n", 
                            'Phone' : "const [phoneNumber, setPhoneNumber] = useState(0); \n"}                            

    switch (option) {
        case "LPR":
            var prefill_information = "";
            var set_prefill_statements = "";
            fields.forEach(function (item, index) {
                prefill_information += set_function_map[item.value];
                set_prefill_statements += set_statements[item.value];
            });


            return "const [searchParams, setSearchParams] = useSearchParams(); \n"
            + set_prefill_statements
            + "const fb_lead_id = searchParams.get(\"fbld_id\"); \n\n"
            + "useEffect(() => { \n"
            + "\tvar preFillLeadInfo = async function preFillLeadInfo() { \n"
            + "\t\tconst lead = { lead_id: parseInt(fb_lead_id) }; \n"    
            + "\t\ttry { \n"
            + "\t\t\tawait axios.post(\"/lead_retrieval\", { lead }).then((response) => { \n"
            + "\t\t\t\tfor (const element of response.data) { \n"
            + prefill_information
            + "\t\t\t\t} \n"
            + "\t\t\t}); \n"
            + "\t\t} catch (error) { \n"
            + "\t\t\t\tconsole.log(error); \n"
            + "\t\t\t} \n"
            + "\t\t}; \n"
            + "\tpreFillLeadInfo(); \n"
            + "}, [searchParams]); ";

        case "LAQ":
            var user_information = "";
            fields.forEach(function (item, index) {
                user_information +=  "            \"" + item.value + "\": [ " +
                    item.label +
                "],\n"
            });
            
            return "{\n" +
                "    \"data\": [\n" +
                "        {\n" +
                "            \"event_name\": \"Lead\",\n" +
                "            \"event_time\": " + Date.now() +",\n" +
                "            \"action_source\": \"system_generated\",\n" +
                "            \"user_data\": {\n" +
                "                \"lead_id\": "+ lead_id + ",\n" +
                            user_information +
                "            },\n" +
                "            \"custom_data\": {\n" +
                "                \"lead_event_source\": \"Your CRM\",\n" +
                "                \"event_source\": \"crm\"\n" +
                "            }\n" +
                "        }\n" +
                "    ]\n" +
                "}";
    }
    return lead_id;
}