import React, { createContext } from "react";
import { toast } from "react-toastify";


const MethodContext = createContext({});

export const MethodProvider = ({ children }) => {
    const formatDateTime = (dateTimeString) => {
        if (!dateTimeString) {
            return "Không có thời gian";
        }
        const dateTime = new Date(dateTimeString);
        const day = dateTime.getDate().toString().padStart(2, "0");
        const month = (dateTime.getMonth() + 1).toString().padStart(2, "0");
        const year = dateTime.getFullYear();
        const hours = dateTime.getHours().toString().padStart(2, "0");
        const minutes = dateTime.getMinutes().toString().padStart(2, "0");
        const formattedDateTime = `${month}-${day}-${year} ${hours}:${minutes}`;
        return formattedDateTime;
    };

    const convertDate = (inputDate) => {
        var outputDate = null;
        var inputDateObject = new Date(inputDate);

        if (isNaN(inputDateObject.getTime())) {
            console.error(
                "Invalid input date format. Please provide date in 'yyyy-MM-dd' format."
            );
            return outputDate;
        }

        outputDate = inputDateObject.toLocaleString("en-US", {
            timeZone: "UTC",
            hour12: false,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });

        return outputDate;
    };

    const notify = (message, type) => {
        const toastType = type === "success" ? toast.success : toast.error;
        return toastType(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                zIndex: 9999,
            },
        });
    };

    const toastLoadingId = (message) => {
        return toast.loading(message);
    };

    const toastUpdateLoadingId = (message, status, idLoading) => {
        if (status === "success") {
            toast.update(idLoading, {
                render: message,
                type: "success",
                isLoading: false,
                autoClose: true,
                closeButton: "close",
            });
        } else {
            toast.update(idLoading, {
                render: message,
                type: "error",
                isLoading: false,
                autoClose: true,
                closeButton: "close",
            });
        }
    };

    const formatNumber = (number) => {
        if (number === undefined || number === null) {
            return 0;
        }
        let parts = number.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (parts[1] && parts[1].length > 3) {
            parts[1] = parts[1].substring(0, 3);
        }
        return parts.join(".");
    };

    // const readFile = (filePath) => {
    //     try {
    //         const fileContent = fs.readFileSync(filePath, "utf8");
    //         return JSON.parse(fileContent);
    //     } catch (error) {
    //         console.error("Error reading file:", error);
    //         return null;
    //     }
    // };

    // const writeFile = (filePath, data) => {
    //     try {
    //         fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    //         console.log("File has been written:", filePath);
    //     } catch (error) {
    //         console.error("Error writing file:", error);
    //     }
    // };

    return (
        <MethodContext.Provider
            value={{
                formatDateTime,
                formatNumber,
                convertDate,
                notify,
                toastLoadingId,
                toastUpdateLoadingId,
                // readFile,
                // writeFile,
            }}
        >
            {children}
        </MethodContext.Provider>
    );
};

export default MethodContext;
