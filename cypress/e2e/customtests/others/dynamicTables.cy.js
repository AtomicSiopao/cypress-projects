const newLocal = context('Registration Page', () => {
    beforeEach(() => {
        cy.visit('https://practice.expandtesting.com');
        cy.get('.container-fluid > .row > .col-12').invoke('remove');
    });

    it('Match Chrome CPU value in table vs value listed in yellow text', () => {
        cy.contains('a', 'Dynamic Table').click();
        cy.scrollTo('bottom');
        let cpuColIndex;
        cy.get('table thead tr th').each(($header, index) => {
            if ($header.text().trim() === 'CPU') {
                cpuColIndex = index; // zero-based
            }
        }).then(() => {
            expect(cpuColIndex).to.not.be.undefined;
            cy.get('table tbody tr').each(($row) => {
                const firstCell = $row.find('td').eq(0).text().trim();
                if (firstCell === 'Chrome') {
                    // 3. Extract CPU value from the correct cell in that row
                    const cpuValue = $row.find('td').eq(cpuColIndex).text().trim();
                    // 4. Grab the yellow label text, e.g. "Chrome CPU: 3.2%"
                    cy.get('#chrome-cpu') // assuming this is the label's ID
                        .invoke('text')
                        .then((labelText) => {
                            // Extract just the number and percent using regex
                            const labelCpuMatch = labelText.match(/Chrome CPU:\s*(.+)/);
                            const labelCpu = labelCpuMatch ? labelCpuMatch[1].trim() : null;

                            // 5. Assert both values match
                            expect(labelCpu).to.equal(cpuValue);
                        });
                }
            });
        });
    });
});