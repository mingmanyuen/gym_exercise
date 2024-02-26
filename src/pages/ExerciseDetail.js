import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box } from "@mui/material";
import {
  exerciseOptions,
  youtubeOptions,
  fetchData2,
} from "../utils/fetchData";
import SimilarExercises from "../components/SimilarExercises";
import ExerciseVideos from "../components/ExerciseVideos";
import Detail from "../components/Detail";

const ExerciseDetail = () => {
  const [ExerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercise, setTargetMuscleExercise] = useState([]);
  const [equipmentExercise, setEquipmentExercise] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      window.scrollTo(0, 0);
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData2(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData2(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExerciseData = await fetchData2(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercise(targetMuscleExerciseData);

      const equipmentExerciseData = await fetchData2(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercise(equipmentExerciseData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail ExerciseDetail={ExerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={ExerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercise={targetMuscleExercise}
        equipmentExercise={equipmentExercise}
      />
    </Box>
  );
};

export default ExerciseDetail;
