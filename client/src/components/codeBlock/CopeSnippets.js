export default function CodeSnippets(lead_id, option, fields){

    switch (option) {
        case "LPR":
            return " const [searchParams, setSearchParams] = useSearchParams(); \n"
            + "const [name, setName] = useState(\"\"); \n"
            + "const [email, setEmail] = useState(\"\"); \n"
            + "const [phoneNumber, setPhoneNumber] = useState(0); \n"
            + "const fb_lead_id = searchParams.get(\"fbld_id\"); \n\n"
            + "useEffect(() => { \n"
            + "\tvar preFillLeadInfo = async function preFillLeadInfo() { \n"
            + "\t\tconst lead = { lead_id: parseInt(fb_lead_id) }; \n"
            + "\t\ttry { \n"
            + "\t\t\tawait axios.post(\"/lead_retrieval\", { lead }).then((response) => { \n"
            + "\t\t\t\tfor (const element of response.data) { \n"
            + "\t\t\t\t\tswitch (element.name) { \n"
            + "\t\t\t\t\t\tcase \"full_name\": \n"
            + "\t\t\t\t\t\t\tsetName(element.values[{Index of name}]); \n"
            + "\t\t\t\t\t\t\tbreak; \n"
            + "\t\t\t\t\t\tcase \"email\": \n"
            + "\t\t\t\t\t\t\tsetEmail(element.values[{{Index of email}}]); \n"
            + "\t\t\t\t\t\t\tbreak; \n"
            + "\t\t\t\t\t\tcase \"phone_number\": \n"
            + "\t\t\t\t\t\t\tsetPhoneNumber(element.values[{Index of Phone number}]); \n"
            + "\t\t\t\t\t\t\tbreak; \n"
            + "\t\t\t\t\t\tdefault: \n"
            + "\t\t\t\t\t\t\tbreak; \n"
            + "\t\t\t\t\t\t} \n"
            + "\t\t\t\t\t} \n"
            + "\t\t\t\t}); \n"
            + "\t\t\t} catch (error) { \n"
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