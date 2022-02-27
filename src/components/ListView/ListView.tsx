import ErrorBoundary from "components/utils/ErrorBoundary";
import type { Props } from "./ListView.types";
import styles from "./ListView.module.css";
import Button from "components/Button";
import ListViewHeader from "components/ListViewHeader";
import List from "components/List";

/**
 * List view contains the component that make up the display of the
 * list of waypoints
 * @param param.dispatch Reducer dispatch function to update state
 * @param param.waypoints List of waypoint data
 */
function ListView({ dispatch, waypoints }: Props) {
  async function downloadGpx() {
    const { default: createGpx } = await import("gps-to-gpx");

    const gpx = createGpx(
      waypoints.map((wp) => ({ latitude: wp[0], longitude: wp[1] }))
    );

    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(gpx)
    );
    element.setAttribute("download", "route.gpx");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  return (
    <ErrorBoundary id="ListView">
      <section className={styles.root}>
        <ListViewHeader />

        {waypoints.length ? (
          <List dispatch={dispatch} waypoints={waypoints} />
        ) : (
          <p className={styles.info}>
            Click on the map to build your list of waypoints.
          </p>
        )}

        <div className={styles.footer}>
          <Button
            className={styles.button}
            disabled={!waypoints.length}
            onClick={downloadGpx}
          >
            Download your Route
          </Button>
        </div>
      </section>
    </ErrorBoundary>
  );
}

export default ListView;
