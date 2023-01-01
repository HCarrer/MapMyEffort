/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useEffect } from "react";
import { useActivity } from "../context/activityContext";
import { format_date, to_km, to_kph } from "../helpers/conversions";

export default function Home() {
  const { activities, setAllActivities } = useActivity()

  useEffect(() => {
    setAllActivities()
  }, [])
  
  return (
    <>
      <div className="w-full">
        <span>activities</span>
        <div className="flex gap-x-10 gap-y-10 flex-wrap">
          {!!activities && activities.map((activity) => {
            return (
              <>
                <Link key={activity.id} className="flex flex-col gap-y-4 w-fit h-80 border border-black" href={`/activities/${activity.id}`}>
                  <span>distance: {to_km(activity.distance)} km/h</span>
                  <span>total elevation gain: {activity.total_elevation_gain} m</span>
                  <span>average speed: {to_kph(activity.average_speed)} km/h</span>
                  <span>start date: {format_date(activity.start_date)}</span>
                </Link>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
}
