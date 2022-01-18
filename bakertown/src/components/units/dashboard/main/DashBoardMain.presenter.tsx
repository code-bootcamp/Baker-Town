import * as S from "./DashBoardMain.styles";
import {
  IDashBoardProductsProps,
  IDashBoardProductsChartProps,
} from "./DashBoardMain.types";
import { DataGrid } from "@mui/x-data-grid";
import { Statistic, Row, Col } from "antd";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const DashBoardMainPresenter = (props: IDashBoardProductsProps) => {
  const columns: any = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 70,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: IDashBoardProductsChartProps) =>
        `${params.getValue(params.id, "firstName") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const data = [
    {
      name: "마카롱",
      uv: props.categoryArray?.[0]?.length, // 각 카테고리 별 개수

      // pv: 3000,
      // amt: 2400,
    },
    {
      name: "베이킹",
      uv: props.categoryArray?.[1]?.length,
      // pv: 1398,
      // amt: 2210,
    },
    {
      name: "케이크",
      uv: props.categoryArray?.[2]?.length,
      // pv: 9800,
      // amt: 2290,
    },
    {
      name: "쿠키",
      uv: props.categoryArray?.[3]?.length,
      // pv: 3908,
      // amt: 2000,
    },
    {
      name: "커피",
      uv: props.categoryArray?.[4]?.length,
      // pv: 4800,
      // amt: 2181,
    },
    {
      name: "쇼콜라",
      uv: props.categoryArray?.[5]?.length,
      // pv: 3800,
      // amt: 2500,
    },
    // {
    //   name: "Page G",
    //   uv: 3490,
    //   pv: 4300,
    //   amt: 2100,
    // },
  ];

  return (
    <S.Wrapper>
      <S.UpWrapper>
        <S.ChartWrapper>
          <LineChart
            width={800}
            height={300}
            data={data}
            margin={{ top: 0, right: 50, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </S.ChartWrapper>
        <S.BalanceWrapper>
          <Row gutter={40}>
            <Col span={10}>
              <Statistic title="Active Users" value={112893} />
            </Col>
            <Col span={12}>
              <Statistic title="Account Balance" value={112893} precision={2} />
            </Col>
          </Row>
        </S.BalanceWrapper>
      </S.UpWrapper>
      <S.DownWrapper>
        <S.DataWrapper style={{ width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </S.DataWrapper>
      </S.DownWrapper>
    </S.Wrapper>
  );
};

export default DashBoardMainPresenter;
