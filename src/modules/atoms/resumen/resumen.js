const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Pedidos recibidos",
      backgroundColor: "#2E5056",
      borderColor: "#2E5056",
      data: [20, 10, 7, 2, 77, 15, 100],
    },
    {
        label: "Pedidos entregados",
        backgroundColor: "#24BFA3",
        borderColor: "#24BFA3",
        data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
        label: "Pedidos rechazados",
        backgroundColor: "#011F26",
        borderColor: "#011F26",
        data: [4, 2, 5, 8, 1, 5, 4],
    }

  ],
};

const config = {
  type: "line",
  data,
  options: {},
};

var myChart = new Chart(
    document.getElementById('chart_resumen'),
    config
  );


  $('#table_id').DataTable();
  
