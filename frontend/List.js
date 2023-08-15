import { View, Text } from 'react-native'
import React, { useLayoutEffect,useState } from 'react'
import axios from "axios";

export default function List() {
  const [students, setStudents] = useState([]);
  useLayoutEffect(() => {
    axios
      .get("http://<Your IPV4 address>:8000/students/")
      .then(function (response) {
        // handle success
        console.log(response.data);
       
        setStudents(response.data);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <View>
      {students.map(student => (
        <View key={student.id}>
          <Text>ID: {student.id}</Text>
          <Text>Name: {student.name}</Text>
          <Text>Roll: {student.roll}</Text>
          <Text>City: {student.city}</Text>
          <Text>--------------------</Text>
        </View>
      ))}
    </View>
  )
}