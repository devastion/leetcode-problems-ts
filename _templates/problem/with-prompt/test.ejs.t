---
to: <%=`src/${foldername}/${name}`%>.test.ts
---
import <%= `{ ${name} }` %> from "./<%=name%>";

describe(<%=`"${foldername}"`%>, () => {
  test("test case 1", () => {
    expect(<%=name%>()).toBe();
  });

  test("test case 2", () => {
    expect(<%=name%>()).toBe();
  });

  test("test case 3", () => {
    expect(<%=name%>()).toBe();
  });
});
