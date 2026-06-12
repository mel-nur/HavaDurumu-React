export default function SearchBar({ city, onCityChange, onSearch, loading }) {
  return (
    <div className="input-group mb-3 d-flex justify-content-center">
      <input type="text" placeholder="Şehir Giriniz" className="bg-secondary text-white ps-2 me-2 rounded-3" style={{ minWidth: "500px" }} value={city}
      onChange={(e) => onCityChange(e.target.value)} onKeyPress={(e) => e.key === "Enter" && onSearch()} disabled={loading}/>
      <button type="button" className="btn btn-primary rounded-3" onClick={onSearch} disabled={loading}>{loading ? "Yükleniyor" : "Ara"}</button>
    </div>
  )
}
