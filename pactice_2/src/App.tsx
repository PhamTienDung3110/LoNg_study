import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
interface IProvince {
  code: number;
  codeName: string;
  districts: string[];
  division_type: string;
  name: string;
  phone_code: number;
}

interface IDistrict {
  code: number;
  codeName: string;
  division_type: string;
  name: string;
  province_code: number;
}

interface IWard {
  code: number;
  codeName: string;
  district_code: number;
  division_type: string;
  name: string;
}
function App() {
  const [provinces, setProvinces] = useState<IProvince[]>([]);
  const [provinceSelect, setProvinceSelect] = useState<number | null>(null);
  const [districts, setDistricts] = useState<IDistrict[]>([]);
  const [districtsSelect, setDistrictSelect] = useState<number | null>(null);
  const [districtFilter, setDistrictFilter] = useState<IDistrict[]>([])
  const [wards, setWards] = useState<IWard[]>([]);
  const [wardsSelect, setWardSelect] = useState<number | null>(null);
  const [wardsFilter, setWardsFilter] = useState<IWard[]>([]);
  useEffect(() => {
    const getProvinces = async () => {
      const data = await axios.get(`https://provinces.open-api.vn/api/v1/`);
      setProvinces(data.data);
      return data.data[0].code;
    };

    const getDistrict = async (currentProvince: number) => {
      const data = await axios.get(`https://provinces.open-api.vn/api/v1/d/`);
      const dataFilter = data.data.filter((item: any) => {
        return item.province_code == currentProvince;
      });
      setDistricts(data.data);
      setDistrictFilter(dataFilter);
      return data.data[0].code;
    };

    const getWards = async (districtStart: number) => {
      const data = await axios.get(`https://provinces.open-api.vn/api/v1/w/`);
      setWards(data.data);
      const dataFilter = data.data.filter((item: any) => {
        return item.district_code == districtStart;
      });
      setWards(data.data);
      setWardsFilter(dataFilter);
    };

    const getAll = async () => {
      const currentProvince = await getProvinces();
      const currentDistrict = await getDistrict(currentProvince);
      await getWards(currentDistrict);
    };
    getAll();
  }, []);

  useEffect(() => {
    const dataFilter = wards.filter((item) => {
      return item.district_code == districtsSelect;
    });
    setWardsFilter(dataFilter);
  }, [districtsSelect]);

  useEffect(() => {
    const dataFilter = districts.filter((item) => {
      return item.province_code == provinceSelect;
    });
    setDistrictFilter(dataFilter);
  }, [provinceSelect]);

  return (
    <>
      <div>
        <select
          name="provice"
          id="provice"
          onChange={(e: any) => setProvinceSelect(e.target.value)}
        >
          {provinces.map((province) => (
            <option key={province.code} value={province.code}>
              {province.name}
            </option>
          ))}
        </select>
        <select
          name="district"
          id="district"
          onChange={(e: any) => setDistrictSelect(e.target.value)}
        >
          {districtFilter.map((dis) => (
            <option key={dis.code} value={dis.code}>
              {dis.name}
            </option>
          ))}
        </select>
        <select
          name="ward"
          id="ward"
          onChange={(e: any) => setWardSelect(e.target.value)}
        >
          {wardsFilter.map((item) => (
            <option key={item.code} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default App;
