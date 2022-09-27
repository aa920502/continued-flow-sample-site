export default function CodeSnippets(lead_id, option, fields){

    switch (option) {
        case "LPR":
            return "Lead Parse and Profile";
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