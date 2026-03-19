"use client";

export default function ChangeButton() {
  const handleClick = async () => {
    const res = await fetch("/api/change");

    // TODO missing implementation
    // ngga make component ini jg gpp, bisa aja implement langsung di page
    // ini cmn utk tes aja

    if (res.ok) {
      alert("Theme changed!!");
    } else {
      alert("gabole");
    }
  };

  return <button onClick={handleClick}>Change Theme</button>;
}
