const button = document.getElementById('download-pdf');
      button.addEventListener('click', function() {
        const element = document.body;
        const options = {
          filename: 'document.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(options).from(element).save();
      });