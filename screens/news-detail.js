import { Heading, Center, Text, Image, ScrollView, Box } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
  // Get the params
  const params = route.params.item;

  return (
    <>
      <Header title={"News"} withBack="true" />
      <ScrollView>
        <Center flex={1} p={"4"}>
        <Heading>News Detail</Heading>
        <Text textAlign={"center"}>{params.title}</Text>
        <image>
            source={{url: params.image}}
            alt = "News Image"
            size = {"xl"}
            resizeMode = "cover"
            mt = {4}
        </image>
        <Box mt={4}>
          <text>{params.content}</text>
        </Box>
       </Center>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
