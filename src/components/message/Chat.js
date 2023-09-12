import TelegramIcon from "@mui/icons-material/Telegram";
import { Button } from "@mui/material";

export default function Chat() {
  return (
    <div className="messageButtonContainer">
      <Button
        className="messageButton"
        onClick={() => console.log("click message")}
      >
        <TelegramIcon />
      </Button>
    </div>
  );
}
