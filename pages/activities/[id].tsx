/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import { useActivity } from "../../context/activityContext";
import { format_date, to_km, to_kph } from "../../helpers/conversions";
import { IActivity } from "../../interfaces/activity";

export default function Home() {
  const { activities, setAllActivities } = useActivity()
  const [activity, setActivity] = useState<IActivity>()
  const router = useRouter()

  useEffect(() => {
    if(!activities) return
    const { id } = router.query
    const activity = activities.filter(activity => activity.id.toString() == id)
    setActivity(activity[0])
  }, [])
  
  return (
    <>
      <div className="w-full">
        <span>activities</span>
        <div className="flex gap-x-10 gap-y-10 flex-wrap">

          {!!activity && (
              <>
                <Link key={activity['id']} className="flex flex-col gap-y-4 w-fit h-80 border border-black" href={`/activities/${activity['id']}`}>
                  <span>distance: {to_km(activity['distance'])} km/h</span>
                  <span>total elevation gain: {activity['total_elevation_gain']} m</span>
                  <span>average speed: {to_kph(activity['average_speed'])} km/h</span>
                  <span>start date: {format_date(activity['start_date'])}</span>
                </Link>
              </>
          )}
        </div>
      </div>
    </>
  );
}
