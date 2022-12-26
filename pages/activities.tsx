/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useCode } from "../context/authCodeContext";
import { listActivities } from "../instances/strava";

export default function Home() {
  const { refreshToken } = useCode()
  const [activities, setActivities] = useState([])

  const listAllActivities = async () => {
    console.log(refreshToken)
    const { data } = await listActivities(refreshToken)
    setActivities(data.data)
    return data.data
  }

  useEffect(() => {
    listAllActivities()
  }, [])

  
  return (
    <>
      <div className="w-full">
        <span>activities</span>
        <div className="flex gap-x-10 gap-y-10 flex-wrap">
          {activities.map((activity) => {
            return (
              <>
                <div key={activity['id']} className="flex flex-col gap-y-4 w-fit h-80 border border-black">
                  <span>distance: {activity['distance']}</span>
                  <span>total elevation gain: {activity['total_elevation_gain']}</span>
                  <span>average speed: {activity['average_speed']}</span>
                  <span>start date: {activity['start_date']}</span>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
}
