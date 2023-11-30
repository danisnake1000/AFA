import PDFDocument from "pdfkit-table"

export const pdfkity = (dataCall, endCall)=>{

    const doc = new PDFDocument()
    doc.on("data",dataCall)
    doc.on("end",endCall)

    doc.fontSize(30).text("Hola Mauri")


    const tableJson = { 
        "headers": [
          { "label":"Name", "property":"name", "width":100 },
          { "label":"Age", "property":"age", "width":100 },
          { "label":"Year", "property":"year", "width":100 }
        ],
        "datas": [
          { "name":"bold:Name 1", "a":"Age 1", "year":"Year 1" },
          { "name":"Name 2", "age":"Age 2", "year":"Year 2" },
          { "name":"Name 3", "age":"Age 3", "year":"Year 3",
            "renderer": "function(value, i, irow){ return value + `(${(1+irow)})`; }"
          }
        ],
        "rows": [
          [ "Name 4", "Age 4", "Year 4" ]
        ],
        "options": {
          "width": 300
        }
      };
      // the magic
      doc.table(tableJson);
      // done!
      doc.end();
    }

