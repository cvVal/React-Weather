import {useEffect, useState} from "react";

export default function UsePosition() {
    const [latitude, setLat] = useState(0);
    const [longitude, setLong] = useState(0);

    useEffect(() => {
        const ac = new AbortController();
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setLat(latitude);
            setLong(longitude);
        });
        return () => ac.abort();
    }, [latitude, longitude])

    return {
        lat: latitude,
        lon: longitude
    };
}