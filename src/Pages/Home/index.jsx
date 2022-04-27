import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Gambar from "../Gambar/Screenshot (17).png";

export default function Home() {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia component="img" image={Gambar} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Manajemen Pengelolaan Lampu PT.Diginet Media
        </Typography>
        <Typography variant="h5" color="text.primary">
          Jumlah Gedung = 7 Unit
          <br></br>
          Jumlah Lantai = 9 Lantai
          <br></br>
          Jumlah Lampu<br></br>
          A. Lampu Nyala = 125 Buah
          <br></br>
          B. Lampu Mati = 32 Buah
          <br></br>
          C. Lampu Redup = 7 Buah
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
