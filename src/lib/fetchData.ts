// app/loaders.ts
export async function fetchingData() {
    const res = await fetch('/json/dataLanding.json');
    const data = await res.json();
    return data;
  }
  